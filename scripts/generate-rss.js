// Generates a static RSS 2.0 feed (public/rss.xml) from the markdown posts in
// src/posts. Run automatically before `start`/`build` via the package.json
// pre-scripts so the feed stays in sync with the posts on every run.

const fs = require("fs");
const path = require("path");

const SITE_URL = "https://www.majkravos.com";
const SITE_TITLE = "Maj Kravos — Blog";
const SITE_DESCRIPTION =
  "Updates on my projects, thoughts on software development, and more.";

const POSTS_DIR = path.join(__dirname, "..", "src", "posts");
const OUTPUT = path.join(__dirname, "..", "public", "rss.xml");

// Mirror of the frontmatter parser in src/lib/posts.js, kept dependency-free
// so it can run in plain Node at build time.
function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  const meta = {};
  let body = raw;

  if (match) {
    body = raw.slice(match[0].length);
    match[1].split("\n").forEach((line) => {
      const idx = line.indexOf(":");
      if (idx === -1) return;
      const key = line.slice(0, idx).trim();
      const value = line
        .slice(idx + 1)
        .trim()
        .replace(/^["']|["']$/g, "");
      meta[key] = value;
    });
  }

  return { meta, body };
}

// First non-empty, non-heading, non-image line of the body.
function firstParagraph(body) {
  for (const rawLine of body.replace(/\r\n/g, "\n").split("\n")) {
    const line = rawLine.trim();
    if (!line) continue;
    if (/^#{1,6}\s/.test(line)) continue;
    if (/^!\[/.test(line)) continue;
    if (/^[-*]\s/.test(line) || /^\d+\.\s/.test(line)) continue;
    return line;
  }
  return "";
}

function deriveExcerpt(meta, body) {
  const text = meta.excerpt || firstParagraph(body);
  if (text.length <= 200) return text;
  return text.slice(0, 200).replace(/\s+\S*$/, "") + "…";
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// YYYY-MM-DD -> RFC 822 date in UTC, parsing as a local date to avoid the
// off-by-one timezone shift `new Date("YYYY-MM-DD")` introduces.
function toRfc822(date) {
  const ymd = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date || "");
  const d = ymd
    ? new Date(Number(ymd[1]), Number(ymd[2]) - 1, Number(ymd[3]))
    : new Date(date);
  if (isNaN(d)) return "";
  return d.toUTCString();
}

function buildFeed(posts) {
  const items = posts
    .map((post) => {
      const link = `${SITE_URL}/blog/${post.slug}`;
      const pubDate = toRfc822(post.date);
      return [
        "    <item>",
        `      <title>${escapeXml(post.title)}</title>`,
        `      <link>${escapeXml(link)}</link>`,
        `      <guid isPermaLink="true">${escapeXml(link)}</guid>`,
        pubDate ? `      <pubDate>${pubDate}</pubDate>` : "",
        `      <description>${escapeXml(post.excerpt)}</description>`,
        "    </item>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  const lastBuild = new Date().toUTCString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <image>
      <url>${SITE_URL}/favicon.png</url>
      <title>${escapeXml(SITE_TITLE)}</title>
      <link>${SITE_URL}/blog</link>
    </image>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
}

function main() {
  const files = fs.existsSync(POSTS_DIR)
    ? fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"))
    : [];

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
    const { meta, body } = parseFrontmatter(raw);
    const slug = meta.slug || file.replace(/\.md$/, "");
    return {
      slug,
      title: meta.title || slug,
      date: meta.date || "",
      excerpt: deriveExcerpt(meta, body),
    };
  });

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  fs.writeFileSync(OUTPUT, buildFeed(posts));
  console.log(`Generated ${OUTPUT} with ${posts.length} post(s).`);
}

main();
