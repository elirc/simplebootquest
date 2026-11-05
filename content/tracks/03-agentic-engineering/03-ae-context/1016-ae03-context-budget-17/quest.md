---
slug: "ae03-context-budget-17"
title: "Agent Drill: Context budgets #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **27 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~10,800 tokens (5% of the window)","~108,000 tokens (54% of the window)","~432,000 tokens (216% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **29 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~58,000 tokens (29% of the window)","~232,000 tokens (116% of the window)","Nothing: files are free to read","~5800 tokens (3% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **8 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~800 tokens (0% of the window)","~8000 tokens (4% of the window)","~32,000 tokens (16% of the window)","~800 tokens (1% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **8 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~3200 tokens (3% of the window)","~128,000 tokens (128% of the window)","Nothing: files are free to read","~32,000 tokens (32% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **22 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~704,000 tokens (352% of the window)","~176,000 tokens (88% of the window)","~17,600 tokens (9% of the window)","Nothing: files are free to read"],"answer":1}]
---
# Agent Drill: Context budgets #17

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
