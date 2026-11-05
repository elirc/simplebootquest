---
slug: "ae03-context-budget-23"
title: "Agent Drill: Context budgets #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **40 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~4000 tokens (2% of the window)","~40,000 tokens (20% of the window)","Nothing: files are free to read","~160,000 tokens (80% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **23 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~184,000 tokens (184% of the window)","Nothing: files are free to read","~46,000 tokens (46% of the window)","~4600 tokens (5% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **38 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~38,000 tokens (38% of the window)","~3800 tokens (4% of the window)","~152,000 tokens (152% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **44 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~44,000 tokens (44% of the window)","Nothing: files are free to read","~176,000 tokens (176% of the window)","~4400 tokens (4% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **58 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~116,000 tokens (116% of the window)","~464,000 tokens (464% of the window)","Nothing: files are free to read","~11,600 tokens (12% of the window)"],"answer":0}]
---
# Agent Drill: Context budgets #23

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
