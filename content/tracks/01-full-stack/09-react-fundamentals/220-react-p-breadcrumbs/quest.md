---
slug: "react-p-breadcrumbs"
title: "Practice: Breadcrumbs"
type: "code"
language: "jsx"
xp: 15
hints: ["`{i > 0 && <span ...>/</span>}` renders nothing for the first item, because `false` renders as nothing."]
---
# Practice: Breadcrumbs

Breadcrumbs show where you are: `Home / Projects / SimpleBootQuest`. Accessibility details:
- Wrap them in `<nav aria-label="Breadcrumb">` with an ordered list.
- The current page is **not a link**, and it's marked with `aria-current="page"`.
- The separators are decoration: hide them from screen readers with `aria-hidden="true"`.

The tests render your component with `render()` and inspect the result with `find`, `findAll` and `text`, just like React Testing Library queries but without a browser.

## Your task
Write `<Breadcrumbs items={[{ label, href }]} />`:
- `<nav aria-label="Breadcrumb"><ol>…</ol></nav>`, with one `<li>` per item.
- Every item except the last is `<a href={href}>{label}</a>`. The last is `<span aria-current="page">{label}</span>`.
- Between items (inside the `<li>`, **before** the link), render `<span aria-hidden="true">/</span>`, so not before the first item.
- An empty `items` array renders nothing.
