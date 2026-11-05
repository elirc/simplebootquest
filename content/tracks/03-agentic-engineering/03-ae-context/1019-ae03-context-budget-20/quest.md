---
slug: "ae03-context-budget-20"
title: "Agent Drill: Context budgets #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **20 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~640,000 tokens (640% of the window)","~16,000 tokens (16% of the window)","~160,000 tokens (160% of the window)","Nothing: files are free to read"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **53 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~106,000 tokens (106% of the window)","~424,000 tokens (424% of the window)","~10,600 tokens (11% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **36 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~7200 tokens (4% of the window)","~288,000 tokens (144% of the window)","Nothing: files are free to read","~72,000 tokens (36% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **9 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~1800 tokens (2% of the window)","Nothing: files are free to read","~18,000 tokens (18% of the window)","~72,000 tokens (72% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **38 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~304,000 tokens (152% of the window)","~30,400 tokens (15% of the window)","Nothing: files are free to read","~1.22 million tokens (608% of the window)"],"answer":0}]
---
# Agent Drill: Context budgets #20

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
