---
slug: "ae01-context-budget-14"
title: "Agent Drill: Context budgets #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **54 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~10,800 tokens (11% of the window)","~108,000 tokens (108% of the window)","~432,000 tokens (432% of the window)","Nothing: files are free to read"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **45 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~180,000 tokens (90% of the window)","~18,000 tokens (9% of the window)","~720,000 tokens (360% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **12 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~1200 tokens (1% of the window)","Nothing: files are free to read","~12,000 tokens (6% of the window)","~48,000 tokens (24% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **8 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~32,000 tokens (16% of the window)","Nothing: files are free to read","~128,000 tokens (64% of the window)","~3200 tokens (2% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **57 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~912,000 tokens (456% of the window)","~228,000 tokens (114% of the window)","~22,800 tokens (11% of the window)","Nothing: files are free to read"],"answer":1}]
---
# Agent Drill: Context budgets #14

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
