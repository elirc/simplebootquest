---
slug: "node-p-chunked-encoding"
title: "Practice: Chunked Transfer Encoding"
type: "code"
language: "js"
xp: 15
hints: ["`n.toString(16)` formats a number in hex, and `parseInt(text, 16)` reads it back.", "Decoding is a loop: read a size line, read that many characters, expect `\\\\r\\\\n`, repeat until size 0."]
---
# Practice: Chunked Transfer Encoding

When a server doesn't know the body length in advance (for example when streaming), HTTP/1.1 sends it in **chunks**. Each chunk is its size in **hex**, `\r\n`, the data, and `\r\n`. A zero-length chunk ends the body:

```
5\r\nHello\r\n
6\r\n world\r\n
0\r\n\r\n
```

Node does this for you whenever you call `res.write()` without setting `Content-Length`.

## Your task (ASCII strings only)
1. `encodeChunked(chunks)` turns an array of strings into a chunked body. Skip empty strings (an empty chunk would end the body early!).
2. `decodeChunked(body)` reverses it and returns the joined string. Throw `Error('Malformed chunk')` if a size isn't valid hex or the data isn't followed by `\r\n`.
