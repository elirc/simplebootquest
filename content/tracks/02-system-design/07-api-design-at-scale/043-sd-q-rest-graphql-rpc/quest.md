---
slug: "sd-q-rest-graphql-rpc"
title: "REST, GraphQL or RPC?"
type: "quiz"
xp: 15
questions: [{"prompt": "Which style gets HTTP and CDN caching most naturally?", "options": ["REST with GET endpoints", "GraphQL over POST", "gRPC"], "answer": 0}, {"prompt": "What common GraphQL performance problem does DataLoader address?", "options": ["Slow JSON parsing", "N+1 queries from nested resolvers", "TLS handshakes"], "answer": 1}, {"prompt": "A monorepo with one React app and one Node API, both TypeScript. Which is especially productive?", "options": ["SOAP", "tRPC (end-to-end type inference)", "Raw TCP"], "answer": 1}, {"prompt": "Why must public GraphQL APIs limit query depth or cost?", "options": ["Style", "Clients can write very expensive nested queries that overload the server", "GraphQL requires it"], "answer": 1}, {"prompt": "What is \"over-fetching\"?", "options": ["Fetching too often", "Receiving more fields than the client needs", "Caching too much"], "answer": 1}]
---
# REST, GraphQL or RPC?

There are three common API styles, and none is "best":

| | REST | GraphQL | RPC (tRPC, gRPC) |
|---|------|---------|------------------|
| Shape | Resources + HTTP verbs | One endpoint, the client picks fields | Call functions by name |
| HTTP caching | Excellent (GET + ETag/CDN) | Hard (mostly POST) | Varies |
| Over-/under-fetching | Common | Solved by design | Endpoint per use case |
| Typing end to end | OpenAPI + codegen | Schema + codegen | Built in (tRPC: TS inference) |
| Public APIs | The default | Popular (GitHub, Shopify) | Rare (gRPC mostly internal) |
| Pitfalls | Chatty clients, versioning | N+1 resolvers, expensive queries, auth per field | Tight coupling of client and server |

Rules of thumb:
- **Public API** used by unknown clients → REST (plus OpenAPI), maybe GraphQL.
- **One TypeScript frontend and backend in a monorepo** → tRPC is very productive.
- **Many different clients needing different shapes** (mobile, web, partners) → GraphQL can help, but plan for query cost limits and DataLoader-style batching.
