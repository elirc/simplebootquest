---
slug: "react-classnames"
title: "Conditional Class Names"
type: "code"
language: "jsx"
xp: 15
hints: ["Write a recursive `add(arg)` that handles each input type.", "A `Set` removes duplicates while keeping order."]
resources: [{"title": "clsx on npm", "url": "https://github.com/lukeed/clsx"}]
---
# Conditional Class Names

Building `className` strings by hand gets messy fast:

```jsx
className={'btn' + (primary ? ' btn-primary' : '') + (disabled ? ' is-disabled' : '')}
```

Every React codebase ends up with a tiny helper (the popular libraries are `clsx` and `classnames`):

```jsx
className={cx('btn', primary && 'btn-primary', { 'is-disabled': disabled })}
```

## Your task

1. `cx(...args)` accepts strings, falsy values (ignored), arrays (flattened recursively), and objects (keys with truthy values are included). It returns the class names joined by single spaces, with duplicates removed.
2. `Button({ variant = 'secondary', size, loading, disabled, children, onClick })` renders a `<button>` with:
   - `className = cx('btn', 'btn-' + variant, size && 'btn-' + size, { 'is-loading': loading })`
   - `disabled` set to `true` when either `disabled` or `loading` is true
   - children replaced by `"Loading…"` while loading
