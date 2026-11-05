---
slug: "ts-p-config-defaults"
title: "Practice: Optional Properties & Defaults"
type: "code"
language: "ts"
xp: 15
hints: ["`??` keeps 0 and empty strings; `||` doesn't."]
---
# Practice: Optional Properties & Defaults

```ts
interface ServerOptions { port?: number; host?: string; cors?: boolean }
type Resolved = Required<ServerOptions>;   // every property is now required
```

## Your task
`resolveOptions(options?: ServerOptions): Required<ServerOptions>` fills in defaults `{ port: 3000, host: 'localhost', cors: false }`. Keep explicitly provided falsy values: `port: 0` and `cors: false` are valid choices. Also throw a `RangeError` if the port is outside 0–65535.
