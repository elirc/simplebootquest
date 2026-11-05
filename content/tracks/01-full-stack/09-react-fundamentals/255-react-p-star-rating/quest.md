---
slug: "react-p-star-rating"
title: "Practice: A Star Rating Input"
type: "code"
language: "jsx"
xp: 15
hints: ["`type=\"button\"` matters inside forms: the default type is \"submit\"."]
---
# Practice: A Star Rating Input

A star rating is a set of buttons, and each one needs an accessible name. "★" alone means nothing to a screen reader.

The tests render your component with `render()` and inspect the result with `find`, `findAll` and `text`, just like React Testing Library queries but without a browser.

## Your task
Write `<StarRating value max={5} onRate readOnly />`:
- Renders `<div role="group" aria-label="Rating: <value> out of <max>">`.
- One `<button type="button">` per star, with `aria-label="Rate <n> out of <max>"` and `aria-pressed` true for the star equal to `value` (false for the others).
- Stars up to `value` show `★`, and the rest show `☆`.
- Clicking star `n` calls `onRate(n)`. Clicking the **currently selected** star calls `onRate(0)` to clear the rating.
- When `readOnly`, render `<span>`s instead of buttons (with no aria-label, aria-pressed or click handler), and give the group the same label.
