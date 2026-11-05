---
slug: "ae03-context-budget-4"
title: "Agent Drill: Context budgets #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **32 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~3200 tokens (3% of the window)","~128,000 tokens (128% of the window)","Nothing: files are free to read","~32,000 tokens (32% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **38 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~304,000 tokens (152% of the window)","Nothing: files are free to read","~76,000 tokens (38% of the window)","~7600 tokens (4% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **14 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~56,000 tokens (56% of the window)","Nothing: files are free to read","~5600 tokens (6% of the window)","~224,000 tokens (224% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **15 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~60,000 tokens (60% of the window)","Nothing: files are free to read","~6000 tokens (6% of the window)","~240,000 tokens (240% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **41 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~656,000 tokens (328% of the window)","~164,000 tokens (82% of the window)","Nothing: files are free to read","~16,400 tokens (8% of the window)"],"answer":1}]
---
# Agent Drill: Context budgets #4

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
