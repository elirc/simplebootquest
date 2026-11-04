---
slug: react-forms
title: Forms & Validation
type: code
language: jsx
xp: 25
---
# Forms & Validation

In React, form inputs are usually **controlled**: the value lives in state, and every keystroke updates it.

```jsx
function SignupForm({ onSubmit }) {
  const [values, setValues] = useState({ email: '', password: '' });
  const [touched, setTouched] = useState({});
  const errors = validateSignup(values);   // derived on every render

  const update = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  return (
    <form onSubmit={(e) => { e.preventDefault(); if (isValid(errors)) onSubmit(values); }}>
      <input name="email" value={values.email} onChange={update} onBlur={() => setTouched({ ...touched, email: true })} />
      {touched.email && errors.email && <p className="error">{errors.email}</p>}
      ...
    </form>
  );
}
```

UX details that matter:

- Validate on every change, but only **show** an error after the field has been *touched* (blurred) or after a submit attempt. Otherwise users get yelled at while typing.
- Disable the submit button while a request is in flight, to prevent double submits.
- Client-side validation is for **UX only**. The server must validate again.

## Your task

1. `validateSignup(values)` takes `{ name, email, password, confirmPassword }` and returns an object of errors (empty if valid):
   - `name`: `"Name is required"` if blank after trimming
   - `email`: `"Email is required"` if blank, `"Email is invalid"` if it doesn't match `something@something.something`
   - `password`: `"Password must be at least 8 characters"`
   - `confirmPassword`: `"Passwords do not match"`
2. `FieldError({ error, touched })` renders `<p className="error" role="alert">{error}</p>` only when the field is touched **and** has an error. Otherwise it renders nothing.
3. `SubmitButton({ submitting, disabled })` renders `<button type="submit">`. Its `disabled` prop is true when either flag is true, and its text is `"Saving…"` while submitting, `"Sign up"` otherwise.
