---
slug: node-how-it-works
title: How Node Works
type: quiz
xp: 15
questions:
  - prompt: "What is Node.js?"
    options: ["A JavaScript framework like React", "A JavaScript runtime built on V8 that runs outside the browser", "A database"]
    answer: 1
  - prompt: "Node handles thousands of connections on one thread mainly because…"
    options: ["It spawns a thread per request", "I/O is non-blocking: it starts work and handles other requests while waiting", "JavaScript is faster than other languages"]
    answer: 1
  - prompt: "Which of these will block every other request in a Node server?"
    options: ["await db.query(...)", "A huge synchronous loop computing primes", "fs.promises.readFile(...)"]
    answer: 1
    explanation: "CPU-heavy synchronous code holds the single thread. I/O is handed off and doesn't block."
  - prompt: "What's the difference between `dependencies` and `devDependencies` in package.json?"
    options: ["No difference", "devDependencies are only needed for development/building (tests, linters, compilers)", "devDependencies are beta versions"]
    answer: 1
  - prompt: "What does `\"type\": \"module\"` in package.json do?"
    options: ["Makes .js files use ES modules (import/export)", "Publishes the package to npm", "Enables TypeScript"]
    answer: 0
  - prompt: "Which file should you commit so teammates install identical dependency versions?"
    options: ["node_modules/", "package-lock.json", ".npmrc"]
    answer: 1
---
# How Node Works

**Node.js** takes Chrome's V8 JavaScript engine and adds APIs for things browsers don't allow: reading files (`fs`), opening network sockets (`net`, `http`), reading environment variables (`process.env`).

### One thread, non-blocking I/O

Node runs your JavaScript on a **single thread**. When you read a file or query a database, Node hands the work to the operating system and keeps serving other requests. When the result is ready, your callback (or `await`) continues.

```js
// Fine: the thread is free while waiting
const rows = await db.query('SELECT * FROM todos');

// Bad: freezes the whole server until the loop ends
for (let i = 0; i < 1e10; i++) {}
```

### Modules

Modern Node uses **ES modules**:

```js
// math.js
export function add(a, b) { return a + b; }

// app.js
import { add } from './math.js';
import express from 'express';     // from node_modules
import fs from 'node:fs/promises'; // built-in module
```

Set `"type": "module"` in `package.json` to enable them. Older code uses CommonJS (`require` / `module.exports`), and you'll still see it everywhere.

### npm

- `npm init -y` creates a `package.json`.
- `npm install express` adds a dependency. `npm install -D vitest` adds a dev-only dependency.
- `package-lock.json` pins exact versions. **Commit it.** Never commit `node_modules/`.
- `"scripts": { "dev": "node --watch src/index.js" }` → run with `npm run dev`.
