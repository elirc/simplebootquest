---
slug: "ae03-context-budget-24"
title: "Agent Drill: Context budgets #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **22 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~44,000 tokens (44% of the window)","Nothing: files are free to read","~176,000 tokens (176% of the window)","~4400 tokens (4% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **41 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~41,000 tokens (21% of the window)","~164,000 tokens (82% of the window)","Nothing: files are free to read","~4100 tokens (2% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **24 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~2400 tokens (1% of the window)","~24,000 tokens (12% of the window)","Nothing: files are free to read","~96,000 tokens (48% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **34 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~6800 tokens (3% of the window)","Nothing: files are free to read","~272,000 tokens (136% of the window)","~68,000 tokens (34% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **39 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~3900 tokens (4% of the window)","~156,000 tokens (156% of the window)","Nothing: files are free to read","~39,000 tokens (39% of the window)"],"answer":3}]
---
# Agent Drill: Context budgets #24

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
