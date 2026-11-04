---
slug: "js-typed-events"
title: "Real-World: A Tiny Pub/Sub Store"
type: "code"
language: "js"
xp: 25
hints: ["Keep listeners in a `Set`, so unsubscribing is just `delete`.", "`select` can be built on top of `subscribe`, remembering the last selected value."]
resources: [{"title": "React: useSyncExternalStore", "url": "https://react.dev/reference/react/useSyncExternalStore"}]
---
# Real-World: A Tiny Pub/Sub Store

State libraries (Redux, Zustand) are, at their core, an object holding state plus a list of **subscribers** to notify when it changes. React's `useSyncExternalStore` hook connects exactly this shape to components.

```js
const store = createStore({ count: 0 });
const unsubscribe = store.subscribe((state, prev) => render(state));
store.setState((s) => ({ count: s.count + 1 }));
```

## Your task

Implement `createStore(initialState)` returning:

- `getState()`: the current state.
- `setState(update)`: `update` is either a partial object (shallow-merged) or a function `(state) => partial`. Subscribers are notified with `(state, previousState)` **only if something actually changed** (compare each key with `Object.is`).
- `subscribe(listener)`: returns an unsubscribe function.
- `select(selector, listener)`: subscribes to a derived value, calling `listener(value)` only when `selector(state)` changes (`Object.is`). Returns an unsubscribe function.
