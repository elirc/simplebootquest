---
slug: "ae01-context-budget-20"
title: "Agent Drill: Context budgets #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **43 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~172,000 tokens (86% of the window)","~688,000 tokens (344% of the window)","Nothing: files are free to read","~17,200 tokens (9% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **53 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~106,000 tokens (53% of the window)","Nothing: files are free to read","~10,600 tokens (5% of the window)","~424,000 tokens (212% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **40 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~320,000 tokens (320% of the window)","Nothing: files are free to read","~8000 tokens (8% of the window)","~80,000 tokens (80% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **45 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~180,000 tokens (90% of the window)","~45,000 tokens (23% of the window)","~4500 tokens (2% of the window)","Nothing: files are free to read"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **12 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~2400 tokens (1% of the window)","~24,000 tokens (12% of the window)","Nothing: files are free to read","~96,000 tokens (48% of the window)"],"answer":1}]
---
# Agent Drill: Context budgets #20

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
