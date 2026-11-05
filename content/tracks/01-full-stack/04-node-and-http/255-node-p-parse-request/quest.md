---
slug: "node-p-parse-request"
title: "Practice: Parsing a Raw HTTP Request"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Split head from body at the first `\\\\r\\\\n\\\\r\\\\n`, then split the head into lines.", "A regex like `/^([A-Z]+) (\\\\S+) (HTTP\\\\/\\\\d\\\\.\\\\d)$/` validates the request line and captures the parts."]
resources: [{"title": "MDN: HTTP messages", "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages"}]
---
# Practice: Parsing a Raw HTTP Request

Before Express, before `http.createServer`, there are bytes on a socket. An HTTP/1.1 request is text:

```
POST /todos?draft=1 HTTP/1.1\r\n
Host: localhost:3000\r\n
Content-Type: application/json\r\n
\r\n
{"title":"Learn HTTP"}
```

A request line, header lines, a blank line, then the body.

## Your task
Write `parseRequest(raw)` returning `{ method, path, query, version, headers, body }`:
- `path` excludes the query string, and `query` is a plain object of decoded single values (last one wins).
- Header names are lowercased and values trimmed. Repeated headers are joined with `", "`.
- `body` is everything after the first blank line (`""` if none).
- Throw `Error('Bad request line')` unless the first line is `METHOD SP target SP HTTP/x.y`, where the method is uppercase letters.
