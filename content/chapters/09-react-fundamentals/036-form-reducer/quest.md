---
slug: "react-form-reducer"
title: "A Form State Reducer"
type: "code"
language: "jsx"
xp: 25
hints: ["Every case spreads `...state` and replaces only what changes.", "On submit, touch every key of `state.values`."]
resources: [{"title": "React Hook Form", "url": "https://react-hook-form.com/"}]
---
# A Form State Reducer

Real forms track more than values: which fields were **touched**, whether a submit was attempted, whether it's **submitting**, and the server's errors. A reducer keeps all of that consistent:

```jsx
const [form, dispatch] = useReducer(formReducer, initialFormState({ email: '', password: '' }));
<input value={form.values.email} onChange={(e) => dispatch({ type: 'change', field: 'email', value: e.target.value })} />
```

This is the core of libraries like React Hook Form and Formik.

## Your task

1. `initialFormState(values)` returns `{ values, touched: {}, errors: {}, submitting: false, submitCount: 0 }`.
2. `formReducer(state, action)`, where `validate` is passed in each action that needs it (`validate(values) → errors`):

| Action | Effect |
|--------|--------|
| `{ type: 'change', field, value, validate }` | updates the value and recomputes `errors` |
| `{ type: 'blur', field }` | marks the field as touched |
| `{ type: 'submit', validate }` | increments `submitCount`, marks **all** fields touched, recomputes errors, and sets `submitting` to true **only if** there are no errors |
| `{ type: 'serverErrors', errors }` | sets the errors and `submitting: false` |
| `{ type: 'success' }` | resets to the initial state built from the current values, with `submitting: false` |

3. `visibleError(state, field)` returns the field's error only if the field is touched or `submitCount > 0`, otherwise `undefined`.
