---
slug: node-event-emitter
title: Build an EventEmitter
type: code
language: js
xp: 25
hints: ["Store arrays of listeners in a Map keyed by event name.", "`once` wraps the listener in a function that removes itself first."]
resources: [{"title": "Node.js: Events", "url": "https://nodejs.org/api/events.html"}]
---
# Build an EventEmitter

A huge part of Node is built on **events**. HTTP servers emit `'request'`, streams emit `'data'` and `'end'`, and processes emit `'exit'`:

```js
import { EventEmitter } from 'node:events';

const server = http.createServer();
server.on('request', (req, res) => { ... });

const emitter = new EventEmitter();
emitter.on('greet', (name) => console.log(`Hi ${name}`));
emitter.emit('greet', 'Ada'); // logs "Hi Ada"
```

This is the **observer pattern**: the emitter doesn't know or care who's listening. It's also how a frontend talks to a WebSocket, how DOM events work, and how many state libraries notify components.

## Your task

Implement `class Emitter` with:

- `on(event, listener)`: registers a listener. Returns a function that **unsubscribes** it (a handy modern API).
- `off(event, listener)`: removes a listener.
- `once(event, listener)`: the listener runs only the first time.
- `emit(event, ...args)`: calls listeners in registration order with the args. Returns `true` if any listeners ran, otherwise `false`.
- `listenerCount(event)`: the number of listeners for an event.

Edge case: if a listener unsubscribes during `emit`, the other listeners in that emit must still run. Hint: iterate over a copy.
