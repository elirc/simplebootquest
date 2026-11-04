---
slug: "js-number-bases"
title: "Number Bases: Binary & Hex"
type: "code"
language: "js"
xp: 15
hints: ["Prepend each remainder: `bits = (n % 2) + bits`.", "`n.toString(16).padStart(2, '0')` makes 2-digit hex."]
---
# Number Bases: Binary & Hex

Computers think in binary (base 2). Developers read hex (base 16) in colours, hashes and memory addresses.

```js
(10).toString(2);       // '1010'
(255).toString(16);     // 'ff'
parseInt('1010', 2);    // 10
parseInt('ff', 16);     // 255
0b1010;                 // 10  (binary literal)
0xff;                   // 255 (hex literal)
```

Colours are three bytes in hex: `#ff8800` → red `ff` (255), green `88` (136), blue `00` (0).

## Your task

1. `toBinary(n)` returns the binary string for a non-negative integer, **without** using `toString(2)`. Repeatedly divide by 2 and collect the remainders.
2. `hexToRgb(hex)` takes `"#ff8800"` and returns `{ r: 255, g: 136, b: 0 }`.
3. `rgbToHex({ r, g, b })` returns a lowercase hex colour, padding each byte to 2 digits.
