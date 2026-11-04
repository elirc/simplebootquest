---
slug: "node-line-splitter"
title: "Streams: Processing Data in Chunks"
type: "code"
language: "js"
xp: 25
hints: ["Keep the last (possibly incomplete) piece in a buffer: `buffer = lines.pop()`.", "`for await (const chunk of chunks)` consumes any async iterable."]
resources: [{"title": "Node.js: Stream", "url": "https://nodejs.org/api/stream.html"}]
---
# Streams: Processing Data in Chunks

Reading a 5 GB log file with `readFile` loads it all into memory. **Streams** process data chunk by chunk, so memory stays flat no matter how big the input is:

```js
import { createReadStream } from 'node:fs';
import readline from 'node:readline';

const rl = readline.createInterface({ input: createReadStream('huge.log') });
for await (const line of rl) { ... }
```

HTTP request bodies are streams too, which is why you read them with `for await (const chunk of req)`.

The tricky part of streams: **chunk boundaries are arbitrary**. A chunk might end in the middle of a line, so you have to buffer the partial line until the next chunk arrives.

## Your task

1. `createLineSplitter(onLine)` returns `{ write(chunk), end() }`. Call `onLine(line)` for every complete line (split on `\n`, and strip a trailing `\r`). `end()` flushes the final line if it isn't empty.
2. `async countErrors(chunks)` takes an **async iterable** of string chunks (a log file) and resolves to the number of lines containing `"ERROR"`.
