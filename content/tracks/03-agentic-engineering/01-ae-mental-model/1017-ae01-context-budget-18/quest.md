---
slug: "ae01-context-budget-18"
title: "Agent Drill: Context budgets #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **55 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~5500 tokens (6% of the window)","~55,000 tokens (55% of the window)","~220,000 tokens (220% of the window)","Nothing: files are free to read"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **34 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~544,000 tokens (272% of the window)","Nothing: files are free to read","~13,600 tokens (7% of the window)","~136,000 tokens (68% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **30 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~60,000 tokens (30% of the window)","~240,000 tokens (120% of the window)","~6000 tokens (3% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **12 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~9600 tokens (5% of the window)","~96,000 tokens (48% of the window)","Nothing: files are free to read","~384,000 tokens (192% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **28 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~22,400 tokens (11% of the window)","~224,000 tokens (112% of the window)","~896,000 tokens (448% of the window)","Nothing: files are free to read"],"answer":1}]
---
# Agent Drill: Context budgets #18

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
