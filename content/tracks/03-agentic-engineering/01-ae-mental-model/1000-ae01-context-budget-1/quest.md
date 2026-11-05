---
slug: "ae01-context-budget-1"
title: "Agent Drill: Context budgets #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **50 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~100,000 tokens (50% of the window)","~10,000 tokens (5% of the window)","Nothing: files are free to read","~400,000 tokens (200% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **41 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~328,000 tokens (328% of the window)","~82,000 tokens (82% of the window)","~8200 tokens (8% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **29 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~464,000 tokens (464% of the window)","~116,000 tokens (116% of the window)","~11,600 tokens (12% of the window)","Nothing: files are free to read"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **10 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~10,000 tokens (5% of the window)","Nothing: files are free to read","~40,000 tokens (20% of the window)","~1000 tokens (1% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **15 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~240,000 tokens (240% of the window)","Nothing: files are free to read","~6000 tokens (6% of the window)","~60,000 tokens (60% of the window)"],"answer":3}]
---
# Agent Drill: Context budgets #1

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
