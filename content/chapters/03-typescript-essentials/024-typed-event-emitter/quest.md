---
slug: "ts-typed-emitter"
title: "A Type-Safe Event Emitter"
type: "code"
language: "ts"
xp: 20
hints: ["Store a `Map` from event name to a `Set` of listeners.", "`once` can wrap the listener and unsubscribe itself before calling it."]
---
# A Type-Safe Event Emitter

A plain emitter accepts any event name and any payload, so typos compile fine. With a **type map**, the compiler checks both:

```ts
type Events = {
  login: { userId: string };
  logout: undefined;
  error: Error;
};

const bus = new TypedEmitter<Events>();
bus.on('login', (e) => e.userId);   // e is { userId: string }
bus.emit('logn', ...);              // ❌ typo caught
```

The signature that makes it work:

```ts
on<K extends keyof Events>(event: K, listener: (payload: Events[K]) => void): () => void
```

## Your task

Implement `class TypedEmitter<E extends Record<string, unknown>>` with:

- `on(event, listener)`, which returns an unsubscribe function.
- `once(event, listener)`.
- `emit(event, payload)`, which returns the number of listeners called.
- `clear(event?)`, which removes the listeners for one event, or for all events.
