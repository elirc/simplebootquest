---
slug: "ae03-context-budget-25"
title: "Agent Drill: Context budgets #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **35 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~280,000 tokens (280% of the window)","~70,000 tokens (70% of the window)","Nothing: files are free to read","~7000 tokens (7% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **15 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~120,000 tokens (60% of the window)","~30,000 tokens (15% of the window)","Nothing: files are free to read","~3000 tokens (2% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **54 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~1.73 million tokens (1728% of the window)","~43,200 tokens (43% of the window)","~432,000 tokens (432% of the window)","Nothing: files are free to read"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **24 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~192,000 tokens (96% of the window)","~4800 tokens (2% of the window)","Nothing: files are free to read","~48,000 tokens (24% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **19 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~7600 tokens (8% of the window)","~76,000 tokens (76% of the window)","~304,000 tokens (304% of the window)"],"answer":2}]
---
# Agent Drill: Context budgets #25

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
