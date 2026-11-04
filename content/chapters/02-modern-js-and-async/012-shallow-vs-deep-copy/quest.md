---
slug: "js-shallow-vs-deep"
title: "Shallow vs Deep Copies"
type: "code"
language: "js"
xp: 20
hints: ["Spread each level on the path down to the change.", "Inside `map`, return the original `p` for posts you don't change."]
resources: [{"title": "MDN: structuredClone", "url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone"}]
---
# Shallow vs Deep Copies

Spread copies **one level deep**. Nested objects are still shared:

```js
const original = { name: 'Ada', address: { city: 'London' } };
const copy = { ...original };
copy.address.city = 'Paris';
original.address.city;   // 'Paris' 😱  same inner object!
```

To update nested data immutably, spread **every level you change**:

```js
const moved = {
  ...original,
  address: { ...original.address, city: 'Paris' },
};
```

For a full deep clone of plain data, use `structuredClone(obj)`.

## Your task

The input objects are deeply frozen, so any mutation throws.

1. `updateCity(user, city)` returns a new user with `address.city` changed.
2. `addTag(post, tag)` returns a new post with the tag appended to `post.meta.tags` (no duplicates).
3. `renameAuthor(blog, postId, name)` returns a new blog where the post with that id has `author.name` changed. Other posts must be the **same objects** (`===`) as before, which is how React detects what changed.
