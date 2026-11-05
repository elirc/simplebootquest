---
slug: "sd04-cache-pattern-1"
title: "Design Drill: Which caching approach? #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Best approach for **a leaderboard recomputed from millions of rows**?","options":["Don't cache it for the decision: read it from the database in the transaction","Cache-aside with a short TTL, invalidated when the profile is updated","Precompute it into a Redis sorted set (or a materialised view)","Cache at the CDN with a short s-maxage, plus cache-aside in Redis"],"answer":2},{"prompt":"Best approach for **the stock count used to confirm a purchase**?","options":["Cache-aside with a short TTL, invalidated when the profile is updated","Don't cache it for the decision: read it from the database in the transaction","Cache at the CDN with a short s-maxage, plus cache-aside in Redis","Precompute it into a Redis sorted set (or a materialised view)"],"answer":1},{"prompt":"Best approach for **a public product page that changes a few times a day**?","options":["Don't cache it for the decision: read it from the database in the transaction","Cache-aside with a short TTL, invalidated when the profile is updated","Cache at the CDN with a short s-maxage, plus cache-aside in Redis","Precompute it into a Redis sorted set (or a materialised view)"],"answer":2},{"prompt":"Best approach for **the current user's profile on every request**?","options":["Precompute it into a Redis sorted set (or a materialised view)","Don't cache it for the decision: read it from the database in the transaction","Cache-aside with a short TTL, invalidated when the profile is updated","Cache at the CDN with a short s-maxage, plus cache-aside in Redis"],"answer":2},{"prompt":"Best approach for **a response personalised with the user's name**?","options":["Cache-aside with a short TTL, invalidated when the profile is updated","Cache-Control: private (never in a shared CDN)","Don't cache it for the decision: read it from the database in the transaction","Cache at the CDN with a short s-maxage, plus cache-aside in Redis"],"answer":1}]
---
# Design Drill: Which caching approach? #1

Cache-aside (lazy loading) is the default. Write-through keeps the cache warm at a write cost. TTLs bound staleness. Some data should never be cached.
