---
slug: react-jsx-and-props
title: JSX & Props
type: code
language: jsx
xp: 20
hints: ["Use a default parameter for `name`.", "`{footer && <footer>{footer}</footer>}` renders it only when present."]
resources: [{"title": "React docs: Passing props", "url": "https://react.dev/learn/passing-props-to-a-component"}]
---
# JSX & Props

```jsx
function Avatar({ name, size = 48 }) {
  return (
    <img
      className="avatar"
      src={`/avatars/${name}.png`}
      alt={name}
      width={size}
    />
  );
}
```

JSX rules:

- A component must return **one root** element. Wrap siblings in `<>...</>` (a Fragment) if needed.
- Use `className` instead of `class`, and `htmlFor` instead of `for`.
- Put JavaScript expressions in `{}`: `{user.name}`, `{count * 2}`, `{formatDate(d)}`.
- Component names start with a capital letter (`<Avatar />`). Lowercase means an HTML tag.

### children

Whatever you put between a component's tags arrives as `props.children`:

```jsx
function Card({ title, children }) {
  return (
    <section className="card">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

<Card title="Profile"><p>Hi!</p></Card>
```

## Your task

1. `Greeting({ name })` renders `<h1 className="greeting">Hello, {name}!</h1>`. If `name` is missing, greet `"stranger"`.
2. `Card({ title, footer, children })` renders a `<section className="card">` containing an `<h2>` with the title, then the children, then, **only if `footer` is provided**, a `<footer>` containing it.
3. `UserBadge({ user })` renders `<Card title={user.name}>` containing `<p>{user.email}</p>`, with the footer `"Admin"` when `user.isAdmin` is true.
