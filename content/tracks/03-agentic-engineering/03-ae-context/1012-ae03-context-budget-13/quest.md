---
slug: "ae03-context-budget-13"
title: "Agent Drill: Context budgets #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **16 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~128,000 tokens (128% of the window)","Nothing: files are free to read","~512,000 tokens (512% of the window)","~12,800 tokens (13% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **17 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~3400 tokens (2% of the window)","~34,000 tokens (17% of the window)","Nothing: files are free to read","~136,000 tokens (68% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **35 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~35,000 tokens (35% of the window)","~140,000 tokens (140% of the window)","~3500 tokens (4% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **21 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~21,000 tokens (21% of the window)","~84,000 tokens (84% of the window)","~2100 tokens (2% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **48 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~9600 tokens (10% of the window)","~384,000 tokens (384% of the window)","~96,000 tokens (96% of the window)"],"answer":3}]
---
# Agent Drill: Context budgets #13

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
