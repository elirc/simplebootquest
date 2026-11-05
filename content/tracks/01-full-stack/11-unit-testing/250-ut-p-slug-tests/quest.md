---
slug: "ut-p-slug-tests"
title: "Practice: Testing a Slug Generator"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
---
# Practice: Testing a Slug Generator

`slugify(title)` builds URL slugs:

- lowercase
- accents removed (`é` → `e`)
- every run of characters other than `a-z` and `0-9` becomes **one** `-`
- no leading or trailing `-`
- an empty result → `'untitled'`
- at most 50 characters, cut at a `-` boundary when possible (never ending with `-`)

The correct implementation is in the **Code under test** tab. Your tests must pass against it and fail against every hidden buggy version.
