---
slug: "auth-hashing-1"
title: "Security Drill: Storing secrets correctly #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Auth & Security Drills"
questions: [{"prompt":"How should you handle **the session token in a cookie**?","options":["Sign it (or store a random id server-side)","Hash with bcrypt or argon2","Hash, keeping a short prefix for display","Encrypt with a key from a KMS"],"answer":0,"explanation":"Sign it (or store a random id server-side)"},{"prompt":"How should you handle **a user's GitHub OAuth token you call GitHub with**?","options":["Sign it (or store a random id server-side)","Hash, keeping a short prefix for display","Encrypt with a key from a KMS","Hash with bcrypt or argon2"],"answer":2,"explanation":"Encrypt with a key from a KMS"},{"prompt":"How should you handle **password reset tokens**?","options":["Hash, with a short expiry, single use","Hash, keeping a short prefix for display","Encrypt with a key from a KMS","Hash with bcrypt or argon2"],"answer":0,"explanation":"Hash, with a short expiry, single use"},{"prompt":"How should you handle **API keys you issue (only need to verify later)**?","options":["Encrypt with a key from a KMS","Hash, keeping a short prefix for display","Sign it (or store a random id server-side)","Hash with bcrypt or argon2"],"answer":1,"explanation":"Hash, keeping a short prefix for display"},{"prompt":"How should you handle **your app's DATABASE_URL**?","options":["Hash with bcrypt or argon2","Keep it in the platform's secret store, never in code","Hash, keeping a short prefix for display","Encrypt with a key from a KMS"],"answer":1,"explanation":"Keep it in the platform's secret store, never in code"}]
---
# Security Drill: Storing secrets correctly #1

**Hash** what you only need to verify (passwords, API keys) with a slow, salted hash like bcrypt or argon2. **Encrypt** what you need to read back later (third-party tokens). **Sign** what must not be tampered with (session tokens). Never store secrets in plain text.
