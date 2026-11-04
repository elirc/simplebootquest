---
slug: "sd-requirements"
title: "Functional vs Non-Functional Requirements"
type: "quiz"
xp: 15
resources: [{"title": "System Design Primer", "url": "https://github.com/donnemartin/system-design-primer"}]
questions: [{"prompt": "Which of these is a NON-functional requirement?", "options": ["Users can upload a profile photo", "The API responds in under 200 ms for 95% of requests", "Admins can export a CSV"], "answer": 1}, {"prompt": "Why do non-functional requirements matter so much for architecture?", "options": ["They don't; features drive design", "The same features at different scale, latency or durability needs require very different designs", "They are only for documentation"], "answer": 1}, {"prompt": "A typical social app has a read/write ratio of about…", "options": ["1:100 (mostly writes)", "1:1", "100:1 (mostly reads)"], "answer": 2, "explanation": "Feeds, profiles and pages are read far more often than they are written, which is why caching is so effective."}, {"prompt": "\"Make it fast\" is a poor requirement because…", "options": ["Speed is not important", "It is not measurable: there is no target to design or test against", "Fast systems are expensive"], "answer": 1}, {"prompt": "Losing a \"like\" vs losing a payment illustrates which requirement?", "options": ["Durability needs differ by data type", "Latency", "Read/write ratio"], "answer": 0}]
---
# Functional vs Non-Functional Requirements

Every design starts with requirements, and they come in two flavours:

| Functional | Non-functional (the "-ilities") |
|------------|-------------------------------|
| *What* the system does | *How well* it does it |
| "Users can create, edit and delete recipes" | "Pages load in under 300 ms at p95" |
| "Users can share a recipe by link" | "99.9% availability" |
| "Admins can ban users" | "Data is never lost once saved" |

Non-functional requirements drive the architecture. A todo app for 10 users and one for 10 million have the same *functional* requirements, but completely different designs.

### Ask before you build

- **Scale:** how many users? Requests per second? Data size, and how fast it grows?
- **Read/write ratio:** most web apps read far more than they write (often 10:1 to 100:1).
- **Latency:** what feels instant to *this* user, on *this* screen?
- **Consistency:** must everyone see a change immediately, or is a few seconds fine?
- **Durability:** what's the cost of losing data? (A like vs a payment.)

Writing these down turns vague goals ("make it fast") into decisions you can test.
