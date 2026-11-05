---
slug: "ae01-context-budget-8"
title: "Agent Drill: Context budgets #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **32 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~6400 tokens (3% of the window)","~256,000 tokens (128% of the window)","~64,000 tokens (32% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **28 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~5600 tokens (6% of the window)","~224,000 tokens (224% of the window)","Nothing: files are free to read","~56,000 tokens (56% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **18 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~288,000 tokens (288% of the window)","Nothing: files are free to read","~72,000 tokens (72% of the window)","~7200 tokens (7% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **39 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~312,000 tokens (156% of the window)","~31,200 tokens (16% of the window)","Nothing: files are free to read","~1.25 million tokens (624% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **38 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~152,000 tokens (76% of the window)","Nothing: files are free to read","~38,000 tokens (19% of the window)","~3800 tokens (2% of the window)"],"answer":2}]
---
# Agent Drill: Context budgets #8

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
