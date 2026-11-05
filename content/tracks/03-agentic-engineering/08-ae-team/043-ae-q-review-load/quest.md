---
slug: "ae-q-review-load"
title: "When Writing Gets Cheap, Review Gets Expensive"
type: "quiz"
xp: 15
questions: [{"prompt": "What becomes the bottleneck when agents make writing code cheap?", "options": ["Typing speed", "Careful human review", "Disk space"], "answer": 1}, {"prompt": "What should happen before you request review on an agent-written PR?", "options": ["Nothing", "You review it carefully yourself first", "Ask the agent to approve it"], "answer": 1}, {"prompt": "Which checks should be fully automated in CI?", "options": ["Architecture decisions", "Types, lint, formatting and tests", "Product priorities"], "answer": 1}, {"prompt": "How should review effort scale?", "options": ["Equal for every PR", "With risk: auth, payments and migrations get more scrutiny", "Only on Fridays"], "answer": 1}, {"prompt": "Is an AI reviewer bot a replacement for human review?", "options": ["Yes", "No: it is a helpful filter, and humans still own the decision and the knowledge"], "answer": 1}]
---
# When Writing Gets Cheap, Review Gets Expensive

Agents make **writing** code cheap. **Reviewing** it stays expensive, and it becomes the bottleneck. A team that generates five times more PRs without changing anything else gets tired reviewers, rubber-stamp approvals, and more bugs in production.

Ways to keep review healthy:
- **The author reviews first.** Never ask a teammate to review code you haven't read carefully yourself.
- **Small PRs, with good descriptions**: what, why, how it was tested, and where reviewers should focus.
- **Automate the boring checks**: types, lint, formatting, tests and security scanners in CI, so humans review design and logic.
- **AI pre-review**: an automated reviewer can catch obvious issues before a human looks. It's a filter, not a substitute.
- **Risk-based review**: auth, payments and migrations get two reviewers. A copy change gets a quick look.
- **Limit work in progress**: if the review queue grows, generate less and review more.

Remember that reviewing also spreads knowledge. Skipping it means nobody but the agent "knows" the code.
