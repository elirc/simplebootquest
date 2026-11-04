---
slug: "js-normalizing-data"
title: "Normalizing API Data"
type: "code"
language: "js"
xp: 20
hints: ["Destructure `{ author, ...post }` in the loop to separate the author.", "Only add an author to `allIds` the first time you see it."]
resources: [{"title": "Redux: Normalizing state shape", "url": "https://redux.js.org/usage/structuring-reducers/normalizing-state-shape"}]
---
# Normalizing API Data

APIs often return **nested** data:

```js
[{ id: 1, title: 'Post', author: { id: 7, name: 'Ada' } }, ...]
```

The same author is repeated in every post. If Ada changes her name, you have to update it everywhere. Frontend stores (Redux, TanStack Query caches) often **normalize** the data instead, exactly like database tables:

```js
{
  posts:   { byId: { 1: { id: 1, title: 'Post', authorId: 7 } }, allIds: [1] },
  authors: { byId: { 7: { id: 7, name: 'Ada' } }, allIds: [7] },
}
```

Now every entity is stored once, and lookups by id are instant.

## Your task

1. `normalize(posts)` converts the nested posts into the shape above. `allIds` keeps first-seen order, without duplicates.
2. `denormalize(state)` rebuilds the nested posts array (in `posts.allIds` order).
3. `renameAuthor(state, authorId, name)` returns a new state with the author renamed. This should be a one-place change!
