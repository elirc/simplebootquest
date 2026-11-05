---
slug: "ae03-context-budget-22"
title: "Agent Drill: Context budgets #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **47 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~94,000 tokens (94% of the window)","~9400 tokens (9% of the window)","~376,000 tokens (376% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **34 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~13,600 tokens (7% of the window)","~544,000 tokens (272% of the window)","Nothing: files are free to read","~136,000 tokens (68% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **15 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~3000 tokens (3% of the window)","~30,000 tokens (30% of the window)","~120,000 tokens (120% of the window)","Nothing: files are free to read"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **38 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~30,400 tokens (30% of the window)","Nothing: files are free to read","~1.22 million tokens (1216% of the window)","~304,000 tokens (304% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **47 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~18,800 tokens (19% of the window)","~752,000 tokens (752% of the window)","Nothing: files are free to read","~188,000 tokens (188% of the window)"],"answer":3}]
---
# Agent Drill: Context budgets #22

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
