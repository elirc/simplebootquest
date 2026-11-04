---
slug: "ts-dependency-interfaces"
title: "Programming to Interfaces"
type: "code"
language: "ts"
xp: 20
hints: ["`constructor(private readonly date: Date) {}` declares and assigns in one go.", "Wrap `await job()` in try/catch and log in both branches."]
---
# Programming to Interfaces

A function that depends on a **concrete class** is welded to it. A function that depends on an **interface** works with anything that has the right shape:

```ts
interface Logger { info(msg: string): void; error(msg: string): void }
interface Clock { now(): Date }

function createReporter(deps: { logger: Logger; clock: Clock }) { ... }
```

In production you pass `console` and a real clock. In tests, you pass simple fakes. TypeScript's structural typing makes this effortless, with no `implements` keyword required. (You can still write `class ConsoleLogger implements Logger` for clarity.)

## Your task

1. `class MemoryLogger implements Logger` records entries as `{ level, msg }` in a public `entries` array.
2. `class FixedClock implements Clock` always returns the date it was constructed with.
3. `createJobRunner({ logger, clock })` returns `run(name, job)`, which:
   - logs info `"<name> started at <ISO time>"`,
   - awaits `job()`,
   - logs info `"<name> finished"` and returns `{ ok: true, value }`,
   - or, on failure, logs error `"<name> failed: <message>"` and returns `{ ok: false, error: <message> }`.
