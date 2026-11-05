---
slug: "node-p-serialize-response"
title: "Practice: Writing a Raw HTTP Response"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Build an array of lines and `join(\"\\\\r\\\\n\")` it. The header block ends with an extra `\\\\r\\\\n`."]
---
# Practice: Writing a Raw HTTP Response

The other half: what `res.status(404).json(...)` eventually writes to the socket.

```
HTTP/1.1 404 Not Found\r\n
Content-Type: application/json\r\n
Content-Length: 21\r\n
\r\n
{"error":"Not found"}
```

**`Content-Length` counts bytes, not characters.** `"héllo"` is 5 characters but 6 bytes in UTF-8. Getting this wrong truncates responses.

## Your task
1. `byteLength(str)` returns the UTF-8 byte length (`new TextEncoder().encode(str).length`).
2. `serializeResponse({ status, headers = {}, body = '' })`:
   - Status line `HTTP/1.1 <status> <reason>` using: 200 OK, 201 Created, 204 No Content, 301 Moved Permanently, 304 Not Modified, 400 Bad Request, 404 Not Found, 500 Internal Server Error. Unknown codes use `Unknown`.
   - The given headers in order, then `Content-Length` (always computed by you, unless the status is 204 or 304, which never have a body or a Content-Length).
   - A blank line, then the body (empty for 204/304).
