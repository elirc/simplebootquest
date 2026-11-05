---
slug: "react-p-page-numbers"
title: "Practice: Pagination Controls"
type: "code"
language: "jsx"
xp: 15
hints: ["Collect the page numbers you want in a Set, sort them, then walk the list and insert `…` (or the single missing page) between non-adjacent numbers."]
---
# Practice: Pagination Controls

With 50 pages you can't show 50 buttons. Most UIs show the first page, the last page, a window around the current page, and `…` for the gaps:

```
‹ 1 … 4 5 [6] 7 8 … 50 ›
```

The tests render your component with `render()` and inspect the result with `find`, `findAll` and `text`, just like React Testing Library queries but without a browser.

## Your task
1. `pageItems(page, total, siblings = 1)`: returns an array of page numbers and `'…'`: always page 1 and `total`, plus `page ± siblings`, with `'…'` wherever numbers are skipped. If the gap is exactly one page, show that page instead of `'…'`.
2. `<Pagination page total onChange />` renders `<nav aria-label="Pagination">` containing:
   - A "Previous" button (`aria-label="Previous page"`, text `‹`), disabled on page 1.
   - One `<button>` per number, with `aria-current="page"` on the current one (and no `aria-current` on the others). Clicking calls `onChange(n)`.
   - A `<span>…</span>` for each gap.
   - A "Next" button (`aria-label="Next page"`, text `›`), disabled on the last page.
