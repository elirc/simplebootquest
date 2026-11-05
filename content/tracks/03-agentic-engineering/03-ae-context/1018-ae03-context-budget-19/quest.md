---
slug: "ae03-context-budget-19"
title: "Agent Drill: Context budgets #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **32 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~1.02 million tokens (512% of the window)","~25,600 tokens (13% of the window)","~256,000 tokens (128% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **13 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~10,400 tokens (10% of the window)","Nothing: files are free to read","~104,000 tokens (104% of the window)","~416,000 tokens (416% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **55 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~440,000 tokens (220% of the window)","~110,000 tokens (55% of the window)","~11,000 tokens (6% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **11 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~22,000 tokens (22% of the window)","~88,000 tokens (88% of the window)","Nothing: files are free to read","~2200 tokens (2% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **58 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~1.86 million tokens (928% of the window)","Nothing: files are free to read","~46,400 tokens (23% of the window)","~464,000 tokens (232% of the window)"],"answer":3}]
---
# Agent Drill: Context budgets #19

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
