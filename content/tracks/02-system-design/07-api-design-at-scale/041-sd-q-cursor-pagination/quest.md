---
slug: "sd-q-cursor-pagination"
title: "Pagination at Scale"
type: "quiz"
xp: 15
questions: [{"prompt": "Why does OFFSET pagination get slower on deep pages?", "options": ["It does not", "The database must still walk past all the skipped rows", "Indexes do not work with LIMIT"], "answer": 1}, {"prompt": "Why include the id in the cursor along with created_at?", "options": ["It is required by JSON", "created_at values can tie, and a unique tie-breaker stops rows being skipped or repeated", "For security"], "answer": 1}, {"prompt": "Why fetch limit + 1 rows?", "options": ["To be safe", "The extra row tells you whether another page exists, without a COUNT query", "Off-by-one bug"], "answer": 1}, {"prompt": "Why make cursors opaque strings?", "options": ["They look nicer", "Clients cannot depend on the format, so you can change it without breaking them", "They are encrypted"], "answer": 1}, {"prompt": "What does cursor pagination give up?", "options": ["Speed", "Jumping directly to an arbitrary page number", "Sorting"], "answer": 1}]
---
# Pagination at Scale

`LIMIT 20 OFFSET 200000` makes the database read and throw away 200,000 rows, so deep pages get slower and slower. And if rows are inserted while someone pages through, items **shift**: they appear twice or get skipped.

**Cursor (keyset) pagination** fixes both:

```
GET /api/posts?limit=20
→ { data: [...], nextCursor: "eyJjcmVhdGVkQXQiOiIyMDI2LTAzLTAxVDEwOjAwOjAwWiIsImlkIjo5ODd9" }

GET /api/posts?limit=20&cursor=eyJ...
→ WHERE (created_at, id) < ($cursorCreatedAt, $cursorId) ORDER BY created_at DESC, id DESC LIMIT 21
```

- Fetch `limit + 1` rows to know whether there's a next page.
- Include a **unique tie-breaker** (the `id`) in both the sort and the cursor.
- Make cursors **opaque** (base64-encoded JSON), so clients don't build them and you can change the format later.
- The trade-off: you can't jump to "page 37". For feeds and infinite scroll that's fine. Admin tables with page numbers can keep offset pagination for small datasets.
