---
slug: "ae01-context-budget-17"
title: "Agent Drill: Context budgets #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **47 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~4700 tokens (5% of the window)","~47,000 tokens (47% of the window)","~188,000 tokens (188% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **28 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~224,000 tokens (224% of the window)","Nothing: files are free to read","~896,000 tokens (896% of the window)","~22,400 tokens (22% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **21 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~16,800 tokens (17% of the window)","~168,000 tokens (168% of the window)","~672,000 tokens (672% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **15 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~1500 tokens (1% of the window)","Nothing: files are free to read","~60,000 tokens (30% of the window)","~15,000 tokens (8% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **6 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~600 tokens (1% of the window)","Nothing: files are free to read","~6000 tokens (6% of the window)","~24,000 tokens (24% of the window)"],"answer":2}]
---
# Agent Drill: Context budgets #17

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
