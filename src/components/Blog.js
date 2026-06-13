import "./style/Blog.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Section, Container, Heading, Button } from "react-bulma-components";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import { loadPosts, formatDate } from "../lib/posts";

export default function Blog({ darkMode }) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let active = true;
    loadPosts().then((p) => {
      if (active) setPosts(p);
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <Section>
      <Container className="Blog-container">
        <Heading
          spaced
          className="is-size-1-desktop is-size-2-tablet is-size-3-mobile"
        >
          Blog
        </Heading>
        <Heading subtitle renderAs="h2" className="is-size-4-tablet">
          My personal corner of the internet where I share updates on my
          projects, thoughts on software development, and more.
        </Heading>

        <Button
          renderAs="a"
          href="/rss.xml"
          target="_blank"
          rel="noopener noreferrer"
          className="Blog-subscribe"
          aria-label="Subscribe to the RSS feed"
        >
          <RssFeedIcon fontSize="small" />
          <span>RSS</span>
        </Button>

        <div className="Blog-list">
          {posts === null && <p className="Blog-body">Loading…</p>}
          {posts && posts.length === 0 && (
            <p className="Blog-body">No posts yet — check back soon.</p>
          )}
          {posts &&
            posts.map((post) => (
              <Link
                key={post.slug}
                className="Blog-preview"
                to={`/blog/${post.slug}`}
              >
                {post.date && (
                  <p className="Blog-date is-size-6">{formatDate(post.date)}</p>
                )}
                <Heading
                  renderAs="h3"
                  spaced
                  className="is-size-4-desktop is-size-5-mobile"
                >
                  {post.title}
                </Heading>
                {post.excerpt && <p className="Blog-body">{post.excerpt}</p>}
                <span className="Blog-readmore">Read more →</span>
              </Link>
            ))}
        </div>
      </Container>
    </Section>
  );
}
