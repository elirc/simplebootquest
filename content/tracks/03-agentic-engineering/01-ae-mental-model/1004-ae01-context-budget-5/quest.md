---
slug: "ae01-context-budget-5"
title: "Agent Drill: Context budgets #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **29 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~2900 tokens (3% of the window)","~29,000 tokens (29% of the window)","~116,000 tokens (116% of the window)","Nothing: files are free to read"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **31 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~62,000 tokens (62% of the window)","~248,000 tokens (248% of the window)","~6200 tokens (6% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **17 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~3400 tokens (2% of the window)","~136,000 tokens (68% of the window)","~34,000 tokens (17% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **38 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~608,000 tokens (608% of the window)","~152,000 tokens (152% of the window)","~15,200 tokens (15% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **57 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~456,000 tokens (456% of the window)","Nothing: files are free to read","~1.82 million tokens (1824% of the window)","~45,600 tokens (46% of the window)"],"answer":0}]
---
# Agent Drill: Context budgets #5

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
