---
slug: "ae01-context-budget-10"
title: "Agent Drill: Context budgets #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **45 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~90,000 tokens (45% of the window)","~9000 tokens (5% of the window)","~360,000 tokens (180% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **59 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~59,000 tokens (59% of the window)","~5900 tokens (6% of the window)","Nothing: files are free to read","~236,000 tokens (236% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **34 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~34,000 tokens (34% of the window)","~3400 tokens (3% of the window)","Nothing: files are free to read","~136,000 tokens (136% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **33 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~264,000 tokens (132% of the window)","~6600 tokens (3% of the window)","~66,000 tokens (33% of the window)","Nothing: files are free to read"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **55 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~440,000 tokens (220% of the window)","~1.76 million tokens (880% of the window)","~44,000 tokens (22% of the window)"],"answer":1}]
---
# Agent Drill: Context budgets #10

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
