---
slug: "ae01-context-budget-11"
title: "Agent Drill: Context budgets #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **25 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~800,000 tokens (400% of the window)","~200,000 tokens (100% of the window)","Nothing: files are free to read","~20,000 tokens (10% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **59 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~236,000 tokens (118% of the window)","~5900 tokens (3% of the window)","~59,000 tokens (30% of the window)","Nothing: files are free to read"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **41 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~4100 tokens (2% of the window)","Nothing: files are free to read","~164,000 tokens (82% of the window)","~41,000 tokens (21% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **26 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~104,000 tokens (104% of the window)","~416,000 tokens (416% of the window)","~10,400 tokens (10% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **28 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~112,000 tokens (56% of the window)","Nothing: files are free to read","~2800 tokens (1% of the window)","~28,000 tokens (14% of the window)"],"answer":3}]
---
# Agent Drill: Context budgets #11

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
