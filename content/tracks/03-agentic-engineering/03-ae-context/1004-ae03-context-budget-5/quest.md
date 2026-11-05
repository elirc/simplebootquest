---
slug: "ae03-context-budget-5"
title: "Agent Drill: Context budgets #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **50 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~40,000 tokens (20% of the window)","~1.6 million tokens (800% of the window)","~400,000 tokens (200% of the window)","Nothing: files are free to read"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **56 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~5600 tokens (6% of the window)","~224,000 tokens (224% of the window)","~56,000 tokens (56% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **55 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~11,000 tokens (11% of the window)","Nothing: files are free to read","~440,000 tokens (440% of the window)","~110,000 tokens (110% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **18 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~14,400 tokens (7% of the window)","~576,000 tokens (288% of the window)","~144,000 tokens (72% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **31 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~992,000 tokens (496% of the window)","~24,800 tokens (12% of the window)","Nothing: files are free to read","~248,000 tokens (124% of the window)"],"answer":3}]
---
# Agent Drill: Context budgets #5

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
