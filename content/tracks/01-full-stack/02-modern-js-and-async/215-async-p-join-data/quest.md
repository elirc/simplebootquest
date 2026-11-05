---
slug: "async-p-join-data"
title: "Practice: Joining Two Datasets"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Destructure `{ authorId, ...post }` in the map callback."]
---
# Practice: Joining Two Datasets

Joining data in JavaScript is like a SQL JOIN. Build a lookup Map first, so the join is O(n + m) instead of O(n × m).

## Your task
`attachAuthors(posts, users)` returns posts with an `author: { id, name }` field (from `post.authorId`), and **without** `authorId`. Posts whose author doesn't exist get `author: null`.
