---
slug: "ae01-context-budget-3"
title: "Agent Drill: Context budgets #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **6 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~1200 tokens (1% of the window)","Nothing: files are free to read","~48,000 tokens (24% of the window)","~12,000 tokens (6% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **29 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~232,000 tokens (116% of the window)","~23,200 tokens (12% of the window)","~928,000 tokens (464% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **14 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~224,000 tokens (112% of the window)","~5600 tokens (3% of the window)","Nothing: files are free to read","~56,000 tokens (28% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **16 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~128,000 tokens (128% of the window)","~3200 tokens (3% of the window)","~32,000 tokens (32% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **42 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~168,000 tokens (84% of the window)","~42,000 tokens (21% of the window)","~4200 tokens (2% of the window)"],"answer":2}]
---
# Agent Drill: Context budgets #3

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
