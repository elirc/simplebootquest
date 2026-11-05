---
slug: "ut-p-password-rules"
title: "Practice: Testing Password Rules"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
---
# Practice: Testing Password Rules

`passwordProblems(password)` returns a list of the rules a password breaks, in a fixed order:

1. `'too short'`: fewer than 12 characters.
2. `'needs a number'`: no digit.
3. `'needs an uppercase letter'`
4. `'contains "password"'`: in any letter case.

A good password returns `[]`.

The correct implementation is in the **Code under test** tab. Your tests must pass against it and fail against every hidden buggy version.

Test each rule **on its own**: a password that breaks exactly one rule tells you exactly which check works.
