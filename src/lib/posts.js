// Loads and parses markdown blog posts from src/posts.
//
// Each .md file may start with a YAML-ish frontmatter block:
//   ---
//   title: Post Title
//   subtitle: Optional subtitle
//   date: 2026-06-01
//   excerpt: Optional preview text for the blog list
//   slug: optional-custom-slug
//   ---
//
// Supported body markdown (intentionally limited to the blog's design):
//   ## Heading            -> section heading
//   ![caption](src)       -> near-full-width image with caption (standalone line)
//   plain paragraphs       -> body text (blank line separates paragraphs)
//   inline: **bold**, *italic*, `code`, [link](url)

// Webpack picks up every .md file in ../posts at build time.
const context = require.context("../posts", false, /\.md$/);

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

// Splits markdown body into typed blocks the renderer understands.
export function parseBlocks(md) {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let paragraph = [];
  let list = null; // { ordered: bool, items: [] }

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: "paragraph", text: paragraph.join(" ") });
      paragraph = [];
    }
  };

  const flushList = () => {
    if (list) {
      blocks.push({ type: "list", ordered: list.ordered, items: list.items });
      list = null;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    // - item / * item (unordered) and 1. item (ordered)
    const unordered = line.match(/^[-*]\s+(.*)$/);
    const ordered = line.match(/^\d+\.\s+(.*)$/);
    if (unordered || ordered) {
      flushParagraph();
      const isOrdered = Boolean(ordered);
      const text = (unordered || ordered)[1];
      if (!list || list.ordered !== isOrdered) {
        flushList();
        list = { ordered: isOrdered, items: [] };
      }
      list.items.push(text);
      continue;
    }

    // ![caption](src "optional title") on its own line
    const image = line.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)$/);
    if (image) {
      flushParagraph();
      flushList();
      blocks.push({
        type: "image",
        src: image[2],
        alt: image[1],
        caption: image[3] || image[1],
      });
      continue;
    }

    // # .. ###### headings
    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: heading[1].length, text: heading[2] });
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  return blocks;
}

function firstParagraph(blocks) {
  const p = blocks.find((b) => b.type === "paragraph");
  return p ? p.text : "";
}

function deriveExcerpt(meta, blocks) {
  const text = meta.excerpt || firstParagraph(blocks);
  if (text.length <= 200) return text;
  return text.slice(0, 200).replace(/\s+\S*$/, "") + "…";
}

let cache = null;

// Returns all posts, newest first. Cached after first load.
export async function loadPosts() {
  if (cache) return cache;

  const posts = await Promise.all(
    context.keys().map(async (key) => {
      const url = context(key).default || context(key);
      const raw = await fetch(url).then((res) => res.text());
      const { meta, body } = parseFrontmatter(raw);
      const blocks = parseBlocks(body);
      const slug =
        meta.slug || key.replace(/^\.\//, "").replace(/\.md$/, "");

      const excerpt = deriveExcerpt(meta, blocks);

      return {
        slug,
        title: meta.title || slug,
        subtitle: meta.subtitle || "",
        date: meta.date || "",
        excerpt,
        blocks,
        // SEO metadata, all overridable from frontmatter
        seo: {
          title: meta.seoTitle || meta.title || slug,
          description: meta.description || excerpt || meta.subtitle || "",
          keywords: meta.keywords || "",
          image: meta.image || meta.ogImage || "",
          canonical: meta.canonical || "",
        },
      };
    })
  );

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  cache = posts;
  return posts;
}

export async function getPost(slug) {
  const posts = await loadPosts();
  return posts.find((p) => p.slug === slug) || null;
}

export function formatDate(date) {
  if (!date) return "";
  // Parse YYYY-MM-DD as a local date; `new Date("YYYY-MM-DD")` treats it as
  // UTC midnight, which renders a day early in timezones behind UTC.
  const ymd = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
  const d = ymd
    ? new Date(Number(ymd[1]), Number(ymd[2]) - 1, Number(ymd[3]))
    : new Date(date);
  if (isNaN(d)) return date;
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
