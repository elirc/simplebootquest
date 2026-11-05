---
slug: "ae03-context-budget-16"
title: "Agent Drill: Context budgets #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **58 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~58,000 tokens (29% of the window)","~5800 tokens (3% of the window)","~232,000 tokens (116% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **24 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~9600 tokens (10% of the window)","~96,000 tokens (96% of the window)","~384,000 tokens (384% of the window)","Nothing: files are free to read"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **38 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~608,000 tokens (608% of the window)","~152,000 tokens (152% of the window)","~15,200 tokens (15% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **41 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~32,800 tokens (16% of the window)","~1.31 million tokens (656% of the window)","~328,000 tokens (164% of the window)","Nothing: files are free to read"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **48 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~1.54 million tokens (768% of the window)","~38,400 tokens (19% of the window)","Nothing: files are free to read","~384,000 tokens (192% of the window)"],"answer":3}]
---
# Agent Drill: Context budgets #16

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
