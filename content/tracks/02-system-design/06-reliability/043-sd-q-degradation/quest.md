---
slug: "sd-q-degradation"
title: "Graceful Degradation"
type: "quiz"
xp: 15
questions: [{"prompt": "The recommendation service times out. What is the best user-facing behaviour?", "options": ["Show a 500 error page", "Render the page without the recommendations widget", "Keep the spinner forever"], "answer": 1}, {"prompt": "What is a bulkhead?", "options": ["A type of database", "Isolating resources (pools, workers) per feature, so one failing part cannot exhaust everything", "A firewall"], "answer": 1}, {"prompt": "Why rate-limit the fallback to the database when the cache is down?", "options": ["To save money", "Otherwise the full cache-miss load can overwhelm the database and cause a second outage", "Redis requires it"], "answer": 1}, {"prompt": "How do feature flags help during incidents?", "options": ["They speed up the CPU", "They can disable a failing or expensive feature instantly without a deploy", "They fix bugs automatically"], "answer": 1}, {"prompt": "How do you know your degradation actually works?", "options": ["Assume it does", "Test failure modes deliberately, e.g. block the dependency in staging (chaos testing)", "Read the code once"], "answer": 1}]
---
# Graceful Degradation

When something breaks, **some** functionality is far better than none. Design every page around the question "what if this dependency is down?"

Examples for a typical app:
- **Recommendations are down** → hide the widget and show the rest of the page.
- **Search is down** → show "search is temporarily unavailable", and keep browsing working.
- **The payment provider is slow** → queue the order as "pending payment" and confirm by email, instead of failing checkout.
- **The cache is down** → fall back to the database, but with **rate limits**, so the database isn't flattened.
- **The image CDN is down** → show placeholders.

Implementation patterns: timeouts plus fallbacks, **feature flags** as kill switches, **bulkheads** (separate connection pools or worker pools, so one slow feature can't use up every connection), and static fallback pages.

Decide in advance which features are **critical** (login, core CRUD, checkout) and which are **nice to have**, and test the failure modes (for example, block the dependency in staging).
