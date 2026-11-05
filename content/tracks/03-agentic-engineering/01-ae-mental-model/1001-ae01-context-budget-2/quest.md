---
slug: "ae01-context-budget-2"
title: "Agent Drill: Context budgets #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **30 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~240,000 tokens (240% of the window)","~960,000 tokens (960% of the window)","~24,000 tokens (24% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **26 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~208,000 tokens (104% of the window)","Nothing: files are free to read","~20,800 tokens (10% of the window)","~832,000 tokens (416% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **20 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~16,000 tokens (8% of the window)","Nothing: files are free to read","~160,000 tokens (80% of the window)","~640,000 tokens (320% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **33 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~33,000 tokens (33% of the window)","~3300 tokens (3% of the window)","~132,000 tokens (132% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **6 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~4800 tokens (5% of the window)","Nothing: files are free to read","~48,000 tokens (48% of the window)","~192,000 tokens (192% of the window)"],"answer":2}]
---
# Agent Drill: Context budgets #2

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
