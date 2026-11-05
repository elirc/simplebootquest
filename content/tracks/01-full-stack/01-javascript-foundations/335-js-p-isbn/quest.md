---
slug: "js-p-isbn"
title: "Practice: Validating ISBNs"
type: "code"
language: "js"
xp: 15
hints: ["Validate the format with a regex first, then compute the weighted sum."]
---
# Practice: Validating ISBNs

Checksums catch typos in IDs: ISBNs, credit cards, bank accounts. An ISBN-10 is 10 characters, 9 digits plus a final check character (`0`–`9` or `X`, meaning 10). It's valid if `Σ (digit × (10 − position))` is divisible by 11, with positions numbered 0–9.

## Your task
`isValidIsbn10(text)` ignores hyphens and spaces, and returns whether the ISBN is valid. `X` is only allowed as the last character.
