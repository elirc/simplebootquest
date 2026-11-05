---
slug: "crud-p-unique-slugs"
title: "Practice: Unique Slugs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Do the accent stripping BEFORE replacing non-alphanumerics, or `é` becomes a dash."]
resources: [{"title": "MDN: String.prototype.normalize()", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize"}]
---
# Practice: Unique Slugs

Blogs and shops use readable URLs: `/posts/my-first-post` instead of `/posts/8f3a…`. A **slug** is generated from the title, and it must be unique.

## Your task
1. `slugify(title)`: lowercase, strip accents (`'é'` → `'e'` via `normalize('NFD')` and removing the combining marks `\u0300-\u036f`), replace every run of non-alphanumeric characters with a single `-`, and trim `-` from both ends. An empty result becomes `'untitled'`.
2. `uniqueSlug(title, taken)`, where `taken` is a `Set` of existing slugs: return `slugify(title)` if free, otherwise append `-2`, `-3`, … until it's free.
