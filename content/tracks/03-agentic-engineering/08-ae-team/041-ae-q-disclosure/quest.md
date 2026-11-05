---
slug: "ae-q-disclosure"
title: "Disclosure and Attribution"
type: "quiz"
xp: 15
questions: [{"prompt": "Why does disclosing AI assistance help reviewers?", "options": ["It does not", "They can adjust their review to AI-typical failure modes", "It speeds up CI"], "answer": 1}, {"prompt": "Who is responsible for a bug in AI-assisted code you submitted?", "options": ["The model provider", "You, the person who submitted it", "Nobody"], "answer": 1}, {"prompt": "Before submitting an AI-assisted PR to an open-source project, what should you check?", "options": ["Nothing", "The project's contribution guidelines and AI policy", "The maintainer's age"], "answer": 1}, {"prompt": "What is most useful to write in an AI-assisted PR description?", "options": ["\"AI did it\"", "What changed, why, and what you verified yourself", "A long apology"], "answer": 1}, {"prompt": "Opening 20 unreviewed AI-generated PRs on a popular project is…", "options": ["Helpful", "A burden on maintainers that damages your reputation", "Required for Hacktoberfest"], "answer": 1}]
---
# Disclosure and Attribution

Should you say when code was written with AI help? Teams and open-source projects increasingly expect it, and some require it.

Why transparency helps:
- **Reviewers calibrate**: AI-written code fails differently (plausible but subtly wrong), so reviewers look for different things.
- **Licensing and policy**: some organisations and projects have rules about AI-generated contributions. Follow them.
- **Trust**: being found out later damages trust far more than disclosing up front.

Common practices:
- A **commit trailer** (for example `Co-Authored-By: <agent>`), or a note in the PR description about how AI was used.
- In the PR, say **what you verified yourself**: "I wrote the tests first, the agent implemented, and I reviewed every line and tested manually on mobile."
- In open source, **read CONTRIBUTING.md** first. Don't flood maintainers with low-effort AI PRs or issues.

What never changes: **you're responsible** for what you submit. "The AI wrote it" isn't an excuse for a bug or a security hole.
