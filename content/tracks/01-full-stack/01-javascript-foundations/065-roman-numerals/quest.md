---
slug: "js-roman-numerals"
title: "Challenge: Roman Numerals"
type: "code"
language: "js"
xp: 20
hints: ["Put the subtractive pairs (900, 400, 90, 40, 9, 4) in the table too, and greedy just works.", "When reading, look one symbol ahead."]
---
# Challenge: Roman Numerals

`I=1, V=5, X=10, L=50, C=100, D=500, M=1000`. Subtractive pairs: `IV=4, IX=9, XL=40, XC=90, CD=400, CM=900`.

A neat approach to converting **to** Roman numerals is a **greedy algorithm** over a table that includes the subtractive pairs:

```js
const TABLE = [[1000, 'M'], [900, 'CM'], [500, 'D'], /* ... */ [1, 'I']];
```

Repeatedly take the largest value that fits. To convert **from** Roman numerals: if a symbol is smaller than the next one, subtract it, otherwise add it.

## Your task

1. `toRoman(n)` for 1–3999 (`1994` → `"MCMXCIV"`).
2. `fromRoman(s)` (`"MCMXCIV"` → `1994`).
