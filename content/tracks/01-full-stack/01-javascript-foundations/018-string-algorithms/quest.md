---
slug: "js-string-algorithms"
title: "String Algorithms"
type: "code"
language: "js"
xp: 20
hints: ["Normalise first: lowercase and strip non-alphanumerics with a regex.", "For anagrams, sorting the letters of both words makes them comparable."]
---
# String Algorithms

Interview classics, and good practice for loops and string methods.

```js
'hello'.split('').reverse().join('');  // 'olleh'
[...'hello'];                          // ['h','e','l','l','o'] — spread works too
'a'.charCodeAt(0);                     // 97
String.fromCharCode(98);               // 'b'
```

## Your task

1. `isPalindrome(text)` returns `true` if the text reads the same backwards, **ignoring case and anything that isn't a letter or digit** (`"A man, a plan, a canal: Panama"` → `true`).
2. `countVowels(text)` counts `a e i o u` (case-insensitive).
3. `isAnagram(a, b)` returns `true` if the two words use exactly the same letters (ignore case and spaces): `"Listen"` / `"Silent"`.
4. `reverseWords(sentence)` reverses the **order** of words: `"one two three"` → `"three two one"`.
