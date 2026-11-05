---
slug: "ae01-context-budget-9"
title: "Agent Drill: Context budgets #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **33 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~528,000 tokens (264% of the window)","Nothing: files are free to read","~13,200 tokens (7% of the window)","~132,000 tokens (66% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **55 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~5500 tokens (3% of the window)","~220,000 tokens (110% of the window)","~55,000 tokens (28% of the window)","Nothing: files are free to read"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **11 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~44,000 tokens (44% of the window)","~176,000 tokens (176% of the window)","~4400 tokens (4% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **19 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~76,000 tokens (38% of the window)","~7600 tokens (4% of the window)","~304,000 tokens (152% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **19 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~608,000 tokens (608% of the window)","~152,000 tokens (152% of the window)","~15,200 tokens (15% of the window)","Nothing: files are free to read"],"answer":1}]
---
# Agent Drill: Context budgets #9

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
