---
slug: "ae03-context-budget-3"
title: "Agent Drill: Context budgets #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **28 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~448,000 tokens (224% of the window)","~11,200 tokens (6% of the window)","~112,000 tokens (56% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **14 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~56,000 tokens (28% of the window)","Nothing: files are free to read","~1400 tokens (1% of the window)","~14,000 tokens (7% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **8 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~1600 tokens (1% of the window)","~16,000 tokens (8% of the window)","~64,000 tokens (32% of the window)","Nothing: files are free to read"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **49 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~392,000 tokens (392% of the window)","~1.57 million tokens (1568% of the window)","~39,200 tokens (39% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **49 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~49,000 tokens (25% of the window)","Nothing: files are free to read","~196,000 tokens (98% of the window)","~4900 tokens (2% of the window)"],"answer":0}]
---
# Agent Drill: Context budgets #3

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
