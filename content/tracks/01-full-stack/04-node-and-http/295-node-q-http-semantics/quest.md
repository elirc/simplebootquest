---
slug: "node-q-http-semantics"
title: "Quiz: HTTP Semantics"
type: "quiz"
xp: 15
resources: [{"title": "MDN: HTTP request methods", "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"}]
questions: [{"prompt": "Why must a GET request never delete data?", "options": ["GET is slower", "GET is safe: browsers, crawlers and link previews may fire it without the user meaning to", "GET cannot have a URL"], "answer": 1}, {"prompt": "A client times out sending `DELETE /todos/5`. Is it safe to retry?", "options": ["No, it may delete twice", "Yes: DELETE is idempotent, and deleting an already-deleted item leaves the same state", "Only with a new id"], "answer": 1}, {"prompt": "Which method replaces an entire resource with the body you send?", "options": ["PATCH", "PUT", "POST", "GET"], "answer": 1}, {"prompt": "A request has valid JSON but `email` is missing. Which status fits best?", "options": ["500", "400 (or 422)", "404", "201"], "answer": 1}, {"prompt": "The user is logged in but isn't allowed to edit someone else's post. Which status?", "options": ["401 Unauthorized", "403 Forbidden", "404 Not Found", "400 Bad Request"], "answer": 1}, {"prompt": "What does a 304 response tell the browser?", "options": ["The resource moved", "Use your cached copy: nothing changed", "The server crashed"], "answer": 1}, {"prompt": "Which status should a successful `POST /todos` return?", "options": ["200 OK with no body", "201 Created, ideally with the new resource and a Location header", "204 No Content"], "answer": 1}]
---
# Quiz: HTTP Semantics

HTTP methods have **meanings** that clients, proxies and caches rely on:

| Method | Safe? | Idempotent? | Typical use |
|--------|-------|-------------|-------------|
| GET | ✅ | ✅ | Read |
| HEAD | ✅ | ✅ | Read the headers only |
| POST | ❌ | ❌ | Create, or "do something" |
| PUT | ❌ | ✅ | Replace a whole resource |
| PATCH | ❌ | ❌ (usually) | Partially update |
| DELETE | ❌ | ✅ | Remove |

- **Safe**: doesn't change server state. Crawlers and prefetchers may call it freely.
- **Idempotent**: doing it twice has the same effect as doing it once, so it's safe to **retry**.

Status code families: **2xx** success, **3xx** redirect or cached, **4xx** the client's fault, **5xx** the server's fault.
