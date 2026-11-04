---
slug: "js-promisify"
title: "From Callbacks to Promises"
type: "code"
language: "js"
xp: 20
hints: ["Return `(...args) => new Promise(...)`, and call `fn(...args, callback)` inside.", "The callback is `(err, result) => err ? reject(err) : resolve(result)`."]
---
# From Callbacks to Promises

Before promises, async APIs took a **callback**. Node's convention is the *error-first* callback:

```js
fs.readFile('notes.txt', 'utf8', (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});
```

Nesting these leads to "callback hell". Wrapping them in promises lets you use `await`:

```js
function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => (err ? reject(err) : resolve(data)));
  });
}
```

Node ships `util.promisify` to do this generically, and you'll write your own.

## Your task

1. `promisify(fn)` takes an error-first callback function and returns a function that returns a promise. Pass along all the arguments.
2. Use it to implement `loadUserName(id, getUser)`, which calls the callback-style `getUser(id, cb)` it is given and resolves to the user's `name` in upper case.
