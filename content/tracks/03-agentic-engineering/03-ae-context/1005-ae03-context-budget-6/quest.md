---
slug: "ae03-context-budget-6"
title: "Agent Drill: Context budgets #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **52 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~41,600 tokens (42% of the window)","~416,000 tokens (416% of the window)","~1.66 million tokens (1664% of the window)","Nothing: files are free to read"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **28 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~896,000 tokens (896% of the window)","~224,000 tokens (224% of the window)","~22,400 tokens (22% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **23 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~92,000 tokens (92% of the window)","~9200 tokens (9% of the window)","Nothing: files are free to read","~368,000 tokens (368% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **37 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~74,000 tokens (74% of the window)","~296,000 tokens (296% of the window)","~7400 tokens (7% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **39 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~156,000 tokens (78% of the window)","~624,000 tokens (312% of the window)","Nothing: files are free to read","~15,600 tokens (8% of the window)"],"answer":0}]
---
# Agent Drill: Context budgets #6

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
