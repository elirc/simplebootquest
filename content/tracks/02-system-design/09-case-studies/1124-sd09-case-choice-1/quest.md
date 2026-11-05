---
slug: "sd09-case-choice-1"
title: "Design Drill: Case study decisions #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**notifications must not slow down posting a comment**. What's the key design move?","options":["A unique constraint or an atomic conditional update in the database","Cache code→URL at the edge, with a 301/302 from the nearest location","Write the comment, enqueue the fan-out job, and respond immediately","Pre-signed direct uploads to object storage, then async processing"],"answer":2},{"prompt":"**search must tolerate typos across millions of products**. What's the key design move?","options":["A unique constraint or an atomic conditional update in the database","Pre-signed direct uploads to object storage, then async processing","Cache code→URL at the edge, with a 301/302 from the nearest location","A dedicated search index kept in sync from the database"],"answer":3},{"prompt":"**users upload 20 MB photos**. What's the key design move?","options":["Cache code→URL at the edge, with a 301/302 from the nearest location","A dedicated search index kept in sync from the database","Pre-signed direct uploads to object storage, then async processing","A unique constraint or an atomic conditional update in the database"],"answer":2},{"prompt":"**a shortened link must redirect as fast as possible worldwide**. What's the key design move?","options":["Pre-signed direct uploads to object storage, then async processing","A unique constraint or an atomic conditional update in the database","Cache code→URL at the edge, with a 301/302 from the nearest location","A dedicated search index kept in sync from the database"],"answer":2},{"prompt":"**two users book the same last seat at the same moment**. What's the key design move?","options":["A unique constraint or an atomic conditional update in the database","Cache code→URL at the edge, with a 301/302 from the nearest location","A dedicated search index kept in sync from the database","Pre-signed direct uploads to object storage, then async processing"],"answer":0}]
---
# Design Drill: Case study decisions #1

Every case study comes down to a few key decisions: where the data lives, what must be consistent, what can be async, and what happens when parts fail.
