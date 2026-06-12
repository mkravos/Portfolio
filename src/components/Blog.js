import "./style/Blog.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <section className="section">
      <div className="container Blog-container">
        <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
          Blog
        </h1>
        <h2 className="subtitle is-size-4-tablet">
          My personal corner of the internet where I share updates on my
          projects, thoughts on software development, and more.
        </h2>

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
                <h3 className="title is-size-4-desktop is-size-5-mobile is-spaced">
                  {post.title}
                </h3>
                {post.excerpt && <p className="Blog-body">{post.excerpt}</p>}
                <span className="Blog-readmore">Read more →</span>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
