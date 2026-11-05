---
slug: "sd-case-architecture-review"
title: "Boss: Architecture Review of Your Capstone"
type: "design"
xp: 120
boss: true
hints: ["Write it for a new teammate who knows web development but not your app.", "Honest weaknesses make a design doc more credible, not less."]
rubric: ["Explains context, users and the key requirements with numbers", "Includes a diagram of the current architecture and a data model summary", "Records at least 4 key decisions with rejected alternatives and reasons", "Honestly lists current weaknesses and risks", "Gives a staged 100× evolution plan with triggers for each stage", "Covers operations: observability, backups/DR, security, deploys", "Is readable by a new teammate (clear structure, no unexplained jargon)"]
minWords: 300
---
# Boss: Architecture Review of Your Capstone

The final System Design quest: write a full **architecture document** for the capstone you built in the Full-Stack Path, as it is **today** and as you'd evolve it for **100× growth**.

This is the document you'd hand a new teammate on their first day, or present in an interview when asked "tell me about something you built".

Include:

- Context: what the app does, its users and requirements.
- The current architecture (with a diagram) and its data model.
- Key decisions you made, and the alternatives you rejected (an ADR-style table).
- Known weaknesses and risks: be honest!
- The evolution plan for 100× users, in stages with triggers.
- Operational readiness: observability, backups, security, deploys.
