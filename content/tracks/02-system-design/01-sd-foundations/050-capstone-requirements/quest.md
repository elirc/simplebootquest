---
slug: "sd-capstone-requirements"
title: "Design Doc: Requirements for Your Capstone"
type: "design"
xp: 40
hints: ["Start with the users and their main actions, then ask \"how many, how often?\" for each action.", "Round aggressively: 1 day ≈ 100,000 seconds."]
rubric: ["States who the users are and what problem the app solves", "Lists functional requirements as concrete user actions", "Gives non-functional requirements **with numbers** (e.g. p95 latency, availability %)", "Estimates requests/second and data growth, showing the arithmetic", "Separates text/database data from large files (images) in the storage estimate", "Has an explicit \"out of scope\" section", "Lists at least two open questions"]
minWords: 150
---
# Design Doc: Requirements for Your Capstone

Time to write your first design document: a **requirements and estimates** doc for the capstone app you're building in the Full-Stack Path (a recipe book, a task manager, an inventory tracker…). If you haven't picked one yet, use "a recipe-sharing app".

Real teams write this *before* building, so everyone agrees on what "done" and "good enough" mean.

### What to include

1. **Overview**: one paragraph saying what the app is and who it's for.
2. **Functional requirements**: 5–8 bullet points of what users can do.
3. **Non-functional requirements**: latency, availability, durability and security targets, with numbers.
4. **Scale estimates**: users, requests per second (average and peak), data growth per year. Show your working.
5. **Out of scope**: what you're deliberately *not* doing.
6. **Open questions**: things you'd need to ask a stakeholder.

Use the template in the editor. Write in Markdown, check yourself against the rubric, then compare with the reference design.
