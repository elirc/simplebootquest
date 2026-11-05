---
slug: "react-p-badge"
title: "Practice: A Notification Badge"
type: "code"
language: "jsx"
xp: 15
optional: true
section: "Practice"
hints: ["A component can `return null` to render nothing."]
---
# Practice: A Notification Badge

Small components still have edge cases: what does a badge show for 0? For 1,500? What does a screen reader announce?

The tests render your component with `render()` and inspect the result with `find`, `findAll` and `text`, just like React Testing Library queries but without a browser.

## Your task
Write `<Badge count={n} max={99} label="notifications" />`:
- Render **nothing** (`null`) when `count` is 0 or less.
- Otherwise render `<span className="badge" aria-label="<count> <label>">…</span>`, where the visible text is the count, or `"<max>+"` when `count > max`.
- The `aria-label` always uses the **real** count (`"150 notifications"`), so screen-reader users get the exact number.
- `max` defaults to 99, and `label` to `"notifications"`.
