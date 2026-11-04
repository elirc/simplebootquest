---
slug: "react-accessible-fields"
title: "Accessible Form Fields"
type: "code"
language: "jsx"
xp: 20
hints: ["Compute `aria-describedby` once with a nested ternary.", "An error takes priority over a hint."]
resources: [{"title": "MDN: ARIA", "url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"}, {"title": "WebAIM: Accessible forms", "url": "https://webaim.org/techniques/forms/"}]
---
# Accessible Form Fields

Screen readers announce an input using its **label**. Without a proper association, a blind user hears "edit text" and has no idea what to type. The essentials:

```jsx
<label htmlFor="email">Email</label>
<input id="email" aria-invalid={Boolean(error)} aria-describedby={error ? 'email-error' : undefined} />
{error && <p id="email-error" role="alert">{error}</p>}
```

- `htmlFor` ↔ `id` links the label to the input (and clicking the label focuses the input).
- `aria-invalid` announces that the field is invalid.
- `aria-describedby` points to the help or error text, so it's read aloud.
- `role="alert"` announces errors as they appear.

Accessible components are also **easier to test**: Testing Library finds inputs with `getByLabelText('Email')`.

## Your task

`TextField({ id, label, value, onChange, error, hint, required, type = 'text' })` renders a `<div className="field">` containing:

1. `<label htmlFor={id}>`, with the label text followed by `" *"` when required.
2. An `<input>` with `id`, `type`, `value`, `required`, `aria-invalid` (`true` when there's an error, otherwise `false`), and `aria-describedby` (the id of the error if there is one, else the id of the hint if there is one, else `undefined`). Its `onChange` calls `onChange(event.target.value)`.
3. If there's an error: `<p id={id + '-error'} className="error" role="alert">`. Otherwise, if there's a hint: `<p id={id + '-hint'} className="hint">`.
