---
slug: "ae03-context-budget-9"
title: "Agent Drill: Context budgets #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **13 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~52,000 tokens (52% of the window)","~5200 tokens (5% of the window)","Nothing: files are free to read","~208,000 tokens (208% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **6 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~4800 tokens (2% of the window)","~192,000 tokens (96% of the window)","Nothing: files are free to read","~48,000 tokens (24% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **7 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~7000 tokens (7% of the window)","~700 tokens (1% of the window)","~28,000 tokens (28% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **45 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~180,000 tokens (180% of the window)","~45,000 tokens (45% of the window)","Nothing: files are free to read","~4500 tokens (5% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **30 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~240,000 tokens (120% of the window)","~60,000 tokens (30% of the window)","~6000 tokens (3% of the window)"],"answer":2}]
---
# Agent Drill: Context budgets #9

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
