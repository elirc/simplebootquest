---
slug: "ae03-context-budget-15"
title: "Agent Drill: Context budgets #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **29 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~2900 tokens (1% of the window)","~29,000 tokens (14% of the window)","Nothing: files are free to read","~116,000 tokens (58% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **38 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~38,000 tokens (19% of the window)","Nothing: files are free to read","~152,000 tokens (76% of the window)","~3800 tokens (2% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **19 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~19,000 tokens (10% of the window)","~1900 tokens (1% of the window)","~76,000 tokens (38% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **11 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~352,000 tokens (352% of the window)","Nothing: files are free to read","~8800 tokens (9% of the window)","~88,000 tokens (88% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **60 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~24,000 tokens (24% of the window)","~240,000 tokens (240% of the window)","~960,000 tokens (960% of the window)","Nothing: files are free to read"],"answer":1}]
---
# Agent Drill: Context budgets #15

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
