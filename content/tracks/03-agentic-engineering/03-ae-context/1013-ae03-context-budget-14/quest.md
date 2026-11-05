---
slug: "ae03-context-budget-14"
title: "Agent Drill: Context budgets #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **9 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~3600 tokens (2% of the window)","Nothing: files are free to read","~36,000 tokens (18% of the window)","~144,000 tokens (72% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **10 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~20,000 tokens (20% of the window)","Nothing: files are free to read","~80,000 tokens (80% of the window)","~2000 tokens (2% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **21 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~8400 tokens (4% of the window)","~84,000 tokens (42% of the window)","~336,000 tokens (168% of the window)","Nothing: files are free to read"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **39 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~3900 tokens (2% of the window)","~156,000 tokens (78% of the window)","Nothing: files are free to read","~39,000 tokens (20% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **55 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~55,000 tokens (55% of the window)","Nothing: files are free to read","~5500 tokens (6% of the window)","~220,000 tokens (220% of the window)"],"answer":0}]
---
# Agent Drill: Context budgets #14

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
