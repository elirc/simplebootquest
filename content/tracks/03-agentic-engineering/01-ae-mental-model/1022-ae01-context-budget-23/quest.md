---
slug: "ae01-context-budget-23"
title: "Agent Drill: Context budgets #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **24 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~19,200 tokens (10% of the window)","~768,000 tokens (384% of the window)","Nothing: files are free to read","~192,000 tokens (96% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **39 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~31,200 tokens (31% of the window)","Nothing: files are free to read","~312,000 tokens (312% of the window)","~1.25 million tokens (1248% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **40 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~160,000 tokens (80% of the window)","~640,000 tokens (320% of the window)","Nothing: files are free to read","~16,000 tokens (8% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **10 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~2000 tokens (2% of the window)","Nothing: files are free to read","~80,000 tokens (80% of the window)","~20,000 tokens (20% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **32 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~32,000 tokens (32% of the window)","~128,000 tokens (128% of the window)","~3200 tokens (3% of the window)","Nothing: files are free to read"],"answer":0}]
---
# Agent Drill: Context budgets #23

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
