// Lightweight document <head> manager — no external dependency.
// applySeo() sets title/meta/canonical and returns a restore function that
// puts every tag it touched back to its previous state (used on unmount).

function upsertMeta(key, isProperty, content, restores) {
  const attr = isProperty ? "property" : "name";
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  const existed = Boolean(el);
  const prev = el ? el.getAttribute("content") : null;

  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);

  restores.push(() => {
    if (existed) el.setAttribute("content", prev);
    else el.remove();
  });
}

function upsertLink(rel, href, restores) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  const existed = Boolean(el);
  const prev = el ? el.getAttribute("href") : null;

  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);

  restores.push(() => {
    if (existed) el.setAttribute("href", prev);
    else el.remove();
  });
}

export function applySeo({ title, description, keywords, image, url }) {
  const restores = [];

  if (title) {
    const prevTitle = document.title;
    document.title = title;
    restores.push(() => {
      document.title = prevTitle;
    });
    upsertMeta("og:title", true, title, restores);
    upsertMeta("twitter:title", false, title, restores);
  }

  if (description) {
    upsertMeta("description", false, description, restores);
    upsertMeta("og:description", true, description, restores);
    upsertMeta("twitter:description", false, description, restores);
  }

  if (keywords) {
    upsertMeta("keywords", false, keywords, restores);
  }

  if (image) {
    upsertMeta("og:image", true, image, restores);
    upsertMeta("twitter:image", false, image, restores);
  }

  if (url) {
    upsertMeta("og:url", true, url, restores);
    upsertLink("canonical", url, restores);
  }

  return () => restores.forEach((fn) => fn());
}
