---
slug: "ae01-context-budget-4"
title: "Agent Drill: Context budgets #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **33 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~66,000 tokens (66% of the window)","~6600 tokens (7% of the window)","Nothing: files are free to read","~264,000 tokens (264% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **5 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~160,000 tokens (80% of the window)","~40,000 tokens (20% of the window)","~4000 tokens (2% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **35 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~560,000 tokens (560% of the window)","Nothing: files are free to read","~14,000 tokens (14% of the window)","~140,000 tokens (140% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **7 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~7000 tokens (7% of the window)","~28,000 tokens (28% of the window)","~700 tokens (1% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **20 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~160,000 tokens (80% of the window)","Nothing: files are free to read","~40,000 tokens (20% of the window)","~4000 tokens (2% of the window)"],"answer":2}]
---
# Agent Drill: Context budgets #4

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
