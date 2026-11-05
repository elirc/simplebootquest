---
slug: "js-p-pluralize"
title: "Practice: Pluralize"
type: "code"
language: "js"
xp: 15
hints: ["`/[^aeiou]y$/` matches a consonant followed by y."]
---
# Practice: Pluralize

"1 items" looks sloppy. Real apps format counts carefully. (For multiple languages you'd use `Intl.PluralRules`.)

## Your task
`pluralize(count, word, plural)` returns `"1 item"`, `"0 items"`, `"5 items"`. If a custom `plural` is given, use it (`pluralize(2, 'person', 'people')` → `"2 people"`). Words ending in `y` after a consonant become `ies` (`"3 categories"`). Format counts with thousands separators (`"1,200 items"`).
