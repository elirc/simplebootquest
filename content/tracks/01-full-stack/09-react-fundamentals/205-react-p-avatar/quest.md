---
slug: "react-p-avatar"
title: "Practice: Avatar with a Fallback"
type: "code"
language: "jsx"
xp: 15
hints: ["Split on `/\\\\s+/` after trimming, so several spaces between words still work."]
---
# Practice: Avatar with a Fallback

User avatars are often missing. A good component falls back to **initials**, and gives an accessible name either way.

The tests render your component with `render()` and inspect the result with `find`, `findAll` and `text`, just like React Testing Library queries but without a browser.

## Your task
Write `<Avatar name="Ada Lovelace" src={url} size={40} />`:
- With a `src`: render `<img src={src} alt={name} width={size} height={size} className="avatar" />`.
- Without one: render `<span className="avatar avatar-fallback" role="img" aria-label={name}>AL</span>`, using the initials: the first letter of the first and last words, uppercased. A single word gives one letter. An empty or whitespace-only name gives `"?"` (with `aria-label="Unknown user"`).
- `size` defaults to 32.
- Also export `initials(name)` as a separate function. It's easier to test.
