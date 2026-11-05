---
slug: "ut-p-parse-money"
title: "Practice: Testing a Money Parser"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice"
hints: ["`\"1,234,567.89\"` has two commas, and a bug that only removes the first one is common."]
---
# Practice: Testing a Money Parser

`parseMoney(text)` turns user input into integer **cents**:

- `'12'` → 1200, `'12.5'` → 1250, `'$1,234.56'` → 123456
- A leading `-` is allowed: `'-$5.00'` → -500
- Surrounding whitespace is ignored.
- More than 2 decimal places, letters, or an empty string → throw `Error('Invalid amount')`.

The correct implementation is in the **Code under test** tab. Your tests must pass against it and fail against every hidden buggy version.
