---
slug: "ae03-context-budget-8"
title: "Agent Drill: Context budgets #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **17 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~6800 tokens (7% of the window)","~68,000 tokens (68% of the window)","~272,000 tokens (272% of the window)","Nothing: files are free to read"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **43 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~4300 tokens (4% of the window)","~43,000 tokens (43% of the window)","Nothing: files are free to read","~172,000 tokens (172% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **25 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~800,000 tokens (800% of the window)","~200,000 tokens (200% of the window)","Nothing: files are free to read","~20,000 tokens (20% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **57 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~1.82 million tokens (912% of the window)","Nothing: files are free to read","~456,000 tokens (228% of the window)","~45,600 tokens (23% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **16 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~1600 tokens (1% of the window)","Nothing: files are free to read","~64,000 tokens (32% of the window)","~16,000 tokens (8% of the window)"],"answer":3}]
---
# Agent Drill: Context budgets #8

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
