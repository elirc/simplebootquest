---
slug: "ae01-context-budget-25"
title: "Agent Drill: Context budgets #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **16 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~64,000 tokens (64% of the window)","Nothing: files are free to read","~1600 tokens (2% of the window)","~16,000 tokens (16% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **31 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~992,000 tokens (992% of the window)","~248,000 tokens (248% of the window)","~24,800 tokens (25% of the window)","Nothing: files are free to read"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **9 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~3600 tokens (2% of the window)","~36,000 tokens (18% of the window)","Nothing: files are free to read","~144,000 tokens (72% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **17 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~68,000 tokens (68% of the window)","~272,000 tokens (272% of the window)","~6800 tokens (7% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **43 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~4300 tokens (2% of the window)","Nothing: files are free to read","~43,000 tokens (22% of the window)","~172,000 tokens (86% of the window)"],"answer":2}]
---
# Agent Drill: Context budgets #25

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
