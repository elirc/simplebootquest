---
slug: "ae03-context-budget-18"
title: "Agent Drill: Context budgets #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **29 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~116,000 tokens (116% of the window)","~464,000 tokens (464% of the window)","~11,600 tokens (12% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **52 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~416,000 tokens (208% of the window)","~41,600 tokens (21% of the window)","~1.66 million tokens (832% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **59 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~5900 tokens (6% of the window)","Nothing: files are free to read","~59,000 tokens (59% of the window)","~236,000 tokens (236% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **60 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~60,000 tokens (60% of the window)","~6000 tokens (6% of the window)","~240,000 tokens (240% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **56 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~22,400 tokens (11% of the window)","Nothing: files are free to read","~224,000 tokens (112% of the window)","~896,000 tokens (448% of the window)"],"answer":2}]
---
# Agent Drill: Context budgets #18

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
