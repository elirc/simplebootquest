---
slug: "js-intl-formatting"
title: "Formatting for Humans (Intl)"
type: "code"
language: "js"
xp: 15
hints: ["Divide cents by 100 before formatting.", "`maximumFractionDigits: 1` keeps compact numbers like `1.2K`."]
resources: [{"title": "MDN: Intl", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"}]
---
# Formatting for Humans (Intl)

Don't hand-roll number and date formatting. Use the built-in `Intl` API, which knows the conventions of every locale:

```js
new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(1234.5);
// '$1,234.50'
new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(1234.5);
// '1.234,50 €'
new Intl.NumberFormat('en', { notation: 'compact' }).format(12345);   // '12K'
new Intl.NumberFormat('en', { style: 'percent' }).format(0.256);      // '26%'
new Intl.DateTimeFormat('en-GB', { dateStyle: 'long', timeZone: 'UTC' }).format(date);
new Intl.ListFormat('en', { type: 'conjunction' }).format(['a', 'b', 'c']); // 'a, b, and c'
```

## Your task

1. `formatMoney(cents, currency, locale)` formats integer cents as currency.
2. `compactNumber(n)` returns English compact notation (`1200` → `"1.2K"`, `3400000` → `"3.4M"`).
3. `listNames(names)` → `"Ada"`, `"Ada and Grace"`, `"Ada, Grace, and Linus"` (English, conjunction).
4. `formatDate(iso)` formats `"2026-03-05"` as `"5 March 2026"` (locale `en-GB`, `dateStyle: 'long'`, UTC).
