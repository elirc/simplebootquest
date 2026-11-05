---
slug: "async-p-diff-by-id"
title: "Practice: What Changed?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Index both arrays by id with Maps."]
---
# Practice: What Changed?

Sync engines, audit logs and "unsaved changes" warnings all need to compare two versions of a list.

## Your task
`diffById(before, after)` compares two arrays of `{ id, ... }` records and returns `{ added, removed, changed }` as arrays of ids (each sorted ascending). A record is "changed" if it exists in both but any field differs (compare with `JSON.stringify`, assuming the same key order).
