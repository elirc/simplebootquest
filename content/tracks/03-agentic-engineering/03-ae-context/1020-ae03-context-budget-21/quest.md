---
slug: "ae03-context-budget-21"
title: "Agent Drill: Context budgets #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **51 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~204,000 tokens (204% of the window)","Nothing: files are free to read","~51,000 tokens (51% of the window)","~5100 tokens (5% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **9 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~288,000 tokens (144% of the window)","~7200 tokens (4% of the window)","~72,000 tokens (36% of the window)","Nothing: files are free to read"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **26 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~20,800 tokens (21% of the window)","~208,000 tokens (208% of the window)","Nothing: files are free to read","~832,000 tokens (832% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **30 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~240,000 tokens (240% of the window)","Nothing: files are free to read","~24,000 tokens (24% of the window)","~960,000 tokens (960% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **13 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~52,000 tokens (26% of the window)","~5200 tokens (3% of the window)","~208,000 tokens (104% of the window)"],"answer":1}]
---
# Agent Drill: Context budgets #21

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
