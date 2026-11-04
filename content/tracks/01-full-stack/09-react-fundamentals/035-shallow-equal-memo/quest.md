---
slug: "react-memo"
title: "Re-renders & React.memo"
type: "code"
language: "jsx"
xp: 25
hints: ["Compare key counts first, then every value with `Object.is`.", "Keep `lastProps` and `lastResult` in the closure."]
resources: [{"title": "React docs: memo", "url": "https://react.dev/reference/react/memo"}, {"title": "Kent C. Dodds: When to useMemo and useCallback", "url": "https://kentcdodds.com/blog/usememo-and-usecallback"}]
---
# Re-renders & React.memo

When a parent re-renders, **every child re-renders too**, even if its props didn't change. Usually that's fine, because React is fast. For expensive components, `React.memo` skips re-rendering when the props are **shallowly equal** to last time:

```jsx
const Row = React.memo(function Row({ todo, onToggle }) { ... });
```

The catch: shallow comparison uses `Object.is` on each prop. A **new object or function every render** defeats it:

```jsx
<Row style={{ color: 'red' }} onToggle={() => toggle(id)} />   // new references each time!
```

That's why `useCallback` and `useMemo` exist. But only reach for them when profiling shows a real problem.

## Your task

1. `shallowEqual(a, b)` returns true if both objects have the same keys and `Object.is`-equal values.
2. `memo(component)` returns a wrapper function with the same call signature, which returns the **cached result** when called with props shallowly equal to the previous call. It also exposes `.renders`, the number of times the inner component actually ran.
