---
slug: "ae01-context-budget-24"
title: "Agent Drill: Context budgets #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **54 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~5400 tokens (5% of the window)","~216,000 tokens (216% of the window)","~54,000 tokens (54% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **36 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~14,400 tokens (14% of the window)","~144,000 tokens (144% of the window)","~576,000 tokens (576% of the window)","Nothing: files are free to read"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **30 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~30,000 tokens (30% of the window)","~3000 tokens (3% of the window)","~120,000 tokens (120% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **55 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~220,000 tokens (110% of the window)","~880,000 tokens (440% of the window)","Nothing: files are free to read","~22,000 tokens (11% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **47 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~376,000 tokens (188% of the window)","Nothing: files are free to read","~37,600 tokens (19% of the window)","~1.5 million tokens (752% of the window)"],"answer":0}]
---
# Agent Drill: Context budgets #24

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
