---
slug: "ae03-context-budget-12"
title: "Agent Drill: Context budgets #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **26 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~104,000 tokens (104% of the window)","Nothing: files are free to read","~2600 tokens (3% of the window)","~26,000 tokens (26% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **37 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~7400 tokens (4% of the window)","Nothing: files are free to read","~74,000 tokens (37% of the window)","~296,000 tokens (148% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **14 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~28,000 tokens (14% of the window)","Nothing: files are free to read","~2800 tokens (1% of the window)","~112,000 tokens (56% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **18 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~72,000 tokens (36% of the window)","Nothing: files are free to read","~18,000 tokens (9% of the window)","~1800 tokens (1% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **26 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~208,000 tokens (104% of the window)","~5200 tokens (3% of the window)","~52,000 tokens (26% of the window)"],"answer":3}]
---
# Agent Drill: Context budgets #12

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
