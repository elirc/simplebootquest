---
slug: "js-caesar-cipher"
title: "Challenge: Caesar Cipher"
type: "code"
language: "js"
xp: 15
hints: ["Work with the offset from `a` (97) or `A` (65).", "Use `((x % 26) + 26) % 26` so negative shifts wrap correctly."]
---
# Challenge: Caesar Cipher

Shift each letter by a fixed amount: with a shift of 3, `a → d` and `z → c` (it wraps around). It's ancient and useless for real security, but great practice with character codes and the modulo operator.

```js
'a'.charCodeAt(0);          // 97
String.fromCharCode(100);   // 'd'
((25 + 3) % 26);            // 2  ← wrap-around
((-1 % 26) + 26) % 26;      // 25 ← safe modulo for negatives
```

⚠️ **Never invent your own cryptography for real data.** Use the platform's crypto APIs (`crypto.subtle`, `bcrypt`), which Chapter 8 covers.

## Your task

1. `caesar(text, shift)` shifts letters, preserving case, and leaves every other character unchanged. `shift` can be negative or larger than 26.
2. `rot13(text)` is a shift of 13 (applying it twice returns the original).
