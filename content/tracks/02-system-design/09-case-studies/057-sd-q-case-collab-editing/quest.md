---
slug: "sd-q-case-collab-editing"
title: "Case Study: Collaborative Editing"
type: "quiz"
xp: 15
resources: [{"title": "Yjs documentation", "url": "https://docs.yjs.dev/"}]
questions: [{"prompt": "What is lost with naive \"last write wins\" saving?", "options": ["Nothing", "Concurrent edits made by other users since you loaded the document", "The document title"], "answer": 1}, {"prompt": "Which approach makes a stale save fail with 409, so the user can merge?", "options": ["CRDT", "Optimistic locking with a version number", "Sharding"], "answer": 1}, {"prompt": "What property makes CRDTs attractive for offline editing?", "options": ["They are encrypted", "Concurrent changes always merge deterministically without a central coordinator", "They are SQL"], "answer": 1}, {"prompt": "In a Yjs setup, what is \"presence\"?", "options": ["The saved document", "Ephemeral state like cursors and who is online, not persisted as content", "The auth token"], "answer": 1}, {"prompt": "A CRUD admin panel occasionally has two people editing the same product. What is usually enough?", "options": ["A CRDT", "Optimistic locking (a version column) with a clear conflict message", "Operational Transformation"], "answer": 1}]
---
# Case Study: Collaborative Editing

**Problem**: several people edit the same document at once, Google Docs-style. Simple "last write wins" saving loses edits: Ada's save overwrites Linus's paragraph.

**Approaches, from simple to sophisticated**:
1. **Optimistic locking**: each save sends the `version` it started from. A stale version → `409 Conflict`, and the user merges by hand. That's fine for forms and rarely shared records, and painful for real co-editing.
2. **Locking**: "Ada is editing this section". Simple, but it blocks people, and stale locks need timeouts.
3. **Operational Transformation (OT)**: edits are operations (insert "x" at 5). A server transforms concurrent operations against each other so everyone converges. Google Docs historically used it, and it needs a central server.
4. **CRDTs** (Yjs, Automerge): data structures designed so that concurrent edits **always merge** deterministically, even offline and peer-to-peer. The server mainly relays and stores updates.

**Practical architecture with Yjs**: clients exchange updates over WebSockets through a sync server (y-websocket or Hocuspocus), with **presence** (cursors) as ephemeral state, periodic **snapshots** to Postgres or S3, and auth checked when the socket connects.

**Lesson**: pick the simplest model your product actually needs. Most CRUD apps only need optimistic locking.
