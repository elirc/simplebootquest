---
slug: "ae01-context-budget-13"
title: "Agent Drill: Context budgets #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **9 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~3600 tokens (4% of the window)","~144,000 tokens (144% of the window)","~36,000 tokens (36% of the window)","Nothing: files are free to read"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **58 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~232,000 tokens (232% of the window)","~23,200 tokens (23% of the window)","Nothing: files are free to read","~928,000 tokens (928% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **60 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~6000 tokens (6% of the window)","~240,000 tokens (240% of the window)","~60,000 tokens (60% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **56 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~11,200 tokens (11% of the window)","~448,000 tokens (448% of the window)","~112,000 tokens (112% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **29 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~116,000 tokens (58% of the window)","~29,000 tokens (14% of the window)","~2900 tokens (1% of the window)"],"answer":2}]
---
# Agent Drill: Context budgets #13

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
