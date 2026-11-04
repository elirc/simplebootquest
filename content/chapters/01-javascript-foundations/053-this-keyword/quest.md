---
slug: "js-this"
title: "The this Keyword"
type: "code"
language: "js"
xp: 15
hints: ["Inside `start`, `() => this.tick()` keeps the right `this`.", "`fn.bind(obj)` returns a copy of `fn` with `this` permanently set to `obj`."]
resources: [{"title": "javascript.info: Object methods, \"this\"", "url": "https://javascript.info/object-methods"}]
---
# The `this` Keyword

`this` refers to the object a function was **called on**. It's decided at call time, not where the function was written:

```js
const counter = {
  count: 0,
  increment() { this.count++; },
};
counter.increment();          // this === counter ✅

const inc = counter.increment;
inc();                        // this is undefined ❌ (method was detached)
```

The classic bug happens when you pass a method as a callback:

```js
setTimeout(counter.increment, 100);        // ❌ loses `this`
setTimeout(() => counter.increment(), 100); // ✅ arrow function keeps the call
setTimeout(counter.increment.bind(counter), 100); // ✅ bind fixes `this`
```

**Arrow functions don't have their own `this`.** They use the `this` of the surrounding code. That makes them great as callbacks inside methods, and bad as object methods.

## Your task

The starter code has `this`-related bugs. Fix them:

1. `timer.start()` should call `this.tick` three times through `runTimes`, so `timer.ticks` ends at 3.
2. `createButton(label)` returns an object whose `onClick` handler, called **detached** (as `const h = button.onClick; h()`), returns `"Clicked <label>"`.
3. `boundGreet(person)` returns a function that, when called with no receiver, returns `person.greet()`'s result.
