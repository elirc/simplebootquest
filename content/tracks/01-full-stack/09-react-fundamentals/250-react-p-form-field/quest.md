---
slug: "react-p-form-field"
title: "Practice: An Accessible Form Field"
type: "code"
language: "jsx"
xp: 15
hints: ["Build the describedby list with `[hintId, errorId].filter(Boolean).join(\" \") || undefined`."]
---
# Practice: An Accessible Form Field

An error message that's only red text is invisible to screen readers. Accessible fields connect the pieces with ids:

```html
<label for="email">Email</label>
<input id="email" aria-invalid="true" aria-describedby="email-hint email-error" />
<p id="email-hint">We'll never share it.</p>
<p id="email-error" role="alert">Enter a valid email</p>
```

The tests render your component with `render()` and inspect the result with `find`, `findAll` and `text`, just like React Testing Library queries but without a browser.

## Your task
Write `<Field id label type="text" value onChange hint error required />` rendering a `<div className="field">` with:
- `<label htmlFor={id}>{label}</label>`. When `required`, add `<span aria-hidden="true"> *</span>` inside the label.
- `<input id type value required aria-invalid aria-describedby onChange />`:
  - `aria-invalid` is `true` when there's an error, and **absent** otherwise.
  - `aria-describedby` lists `<id>-hint` and/or `<id>-error` (space-separated, hint first), or is absent if there are neither.
  - `onChange` calls the `onChange` prop with `event.target.value` (not the event).
- `<p id="<id>-hint" className="hint">` when there's a hint.
- `<p id="<id>-error" className="error" role="alert">` when there's an error.
