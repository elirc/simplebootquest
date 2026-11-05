---
slug: "ae01-context-budget-12"
title: "Agent Drill: Context budgets #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **38 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~152,000 tokens (152% of the window)","~3800 tokens (4% of the window)","Nothing: files are free to read","~38,000 tokens (38% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **38 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~152,000 tokens (76% of the window)","~15,200 tokens (8% of the window)","~608,000 tokens (304% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **41 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~4100 tokens (4% of the window)","~41,000 tokens (41% of the window)","Nothing: files are free to read","~164,000 tokens (164% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **42 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~168,000 tokens (84% of the window)","Nothing: files are free to read","~672,000 tokens (336% of the window)","~16,800 tokens (8% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **18 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~18,000 tokens (9% of the window)","~72,000 tokens (36% of the window)","~1800 tokens (1% of the window)"],"answer":1}]
---
# Agent Drill: Context budgets #12

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
