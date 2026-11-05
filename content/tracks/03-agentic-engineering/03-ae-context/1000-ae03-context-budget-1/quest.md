---
slug: "ae03-context-budget-1"
title: "Agent Drill: Context budgets #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **51 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~204,000 tokens (102% of the window)","~816,000 tokens (408% of the window)","~20,400 tokens (10% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **53 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~1.7 million tokens (848% of the window)","~42,400 tokens (21% of the window)","Nothing: files are free to read","~424,000 tokens (212% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **59 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~944,000 tokens (472% of the window)","Nothing: files are free to read","~236,000 tokens (118% of the window)","~23,600 tokens (12% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **14 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~11,200 tokens (6% of the window)","~448,000 tokens (224% of the window)","~112,000 tokens (56% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **16 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~1600 tokens (2% of the window)","~16,000 tokens (16% of the window)","Nothing: files are free to read","~64,000 tokens (64% of the window)"],"answer":1}]
---
# Agent Drill: Context budgets #1

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
