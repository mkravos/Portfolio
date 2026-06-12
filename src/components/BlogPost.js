import "./style/Blog.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPost, formatDate } from "../lib/posts";
import { applySeo } from "../lib/seo";

// 2024 is when the site was first published; show a range once past that.
function copyrightYear() {
  const year = new Date().getFullYear();
  return year > 2024 ? `2024-${year}` : `${year}`;
}

function Block({ block }) {
  if (block.type === "heading") {
    return (
      <h2 className="Blog-heading title is-size-4-desktop is-size-5-mobile has-text-weight-semibold is-spaced">
        {renderInline(block.text)}
      </h2>
    );
  }

  if (block.type === "list") {
    const items = block.items.map((item, i) => (
      <li key={i}>{renderInline(item)}</li>
    ));
    return block.ordered ? (
      <ol className="Blog-list-ordered">{items}</ol>
    ) : (
      <ul className="Blog-list-unordered">{items}</ul>
    );
  }

  if (block.type === "image") {
    return (
      <figure className="Blog-figure">
        <img
          className="Blog-image"
          src={block.src}
          alt={block.alt}
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />
        {block.caption && (
          <figcaption className="Blog-caption">{block.caption}</figcaption>
        )}
      </figure>
    );
  }

  return <p className="Blog-body">{renderInline(block.text)}</p>;
}

// Minimal inline markdown: **bold**, *italic*, `code`, [text](url).
// Recurses into bold/italic/link content so nesting like **[text](url)** works.
export function renderInline(text, keyPrefix = "i") {
  const pattern =
    /(\*\*([\s\S]+?)\*\*)|(\*([\s\S]+?)\*)|(`([^`]+)`)|(\[([^\]]+)\]\(([^)\s]+)\))/g;
  const nodes = [];
  let last = 0;
  let match;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }

    const k = `${keyPrefix}-${key++}`;

    if (match[2]) {
      nodes.push(<strong key={k}>{renderInline(match[2], k)}</strong>);
    } else if (match[4]) {
      nodes.push(<em key={k}>{renderInline(match[4], k)}</em>);
    } else if (match[6]) {
      // code is rendered literally, no nested formatting
      nodes.push(<code key={k}>{match[6]}</code>);
    } else if (match[8]) {
      const external = /^https?:\/\//.test(match[9]);
      nodes.push(
        <a
          key={k}
          href={match[9]}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {renderInline(match[8], k)}
        </a>
      );
    }

    last = pattern.lastIndex;
  }

  if (last < text.length) {
    nodes.push(text.slice(last));
  }

  return nodes;
}

export default function BlogPost({ slug }) {
  const [post, setPost] = useState(undefined); // undefined = loading, null = not found

  useEffect(() => {
    let active = true;
    getPost(slug).then((p) => {
      if (active) setPost(p);
    });
    return () => {
      active = false;
    };
  }, [slug]);

  // Propagate the post's SEO frontmatter to the document <head>,
  // restoring the previous tags when leaving the post.
  useEffect(() => {
    if (!post) return undefined;
    return applySeo({
      title: post.seo.title,
      description: post.seo.description,
      keywords: post.seo.keywords,
      image: post.seo.image,
      url:
        post.seo.canonical ||
        `${window.location.origin}/blog/${post.slug}`,
    });
  }, [post]);

  if (post === undefined) {
    return (
      <section className="section">
        <div className="container Blog-container">
          <p className="Blog-body">Loading…</p>
        </div>
      </section>
    );
  }

  if (post === null) {
    return (
      <section className="section">
        <div className="container Blog-container">
          <h1 className="title is-spaced is-size-2-desktop is-size-3-mobile">
            Post not found
          </h1>
          <p className="Blog-body">
            <Link to="/blog">← Back to all posts</Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <article className="container Blog-container">
        <Link className="Blog-backlink" to="/blog">
          ← All posts
        </Link>

        <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
          {post.title}
        </h1>
        {post.subtitle && (
          <h2 className="subtitle is-size-4-tablet has-text-weight-normal">
            {post.subtitle}
          </h2>
        )}
        {post.date && (
          <p className="Blog-date is-size-6">{formatDate(post.date)}</p>
        )}

        <div className="Blog-content">
          {post.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        <div className="Blog-copyright">
          Maj Kravos<span className="icon">&copy;</span>{copyrightYear()}
        </div>
      </article>
    </section>
  );
}
