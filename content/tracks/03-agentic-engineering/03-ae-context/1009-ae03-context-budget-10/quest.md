---
slug: "ae03-context-budget-10"
title: "Agent Drill: Context budgets #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **48 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~384,000 tokens (192% of the window)","~96,000 tokens (48% of the window)","~9600 tokens (5% of the window)","Nothing: files are free to read"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **44 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~44,000 tokens (22% of the window)","~176,000 tokens (88% of the window)","~4400 tokens (2% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **28 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~112,000 tokens (56% of the window)","~2800 tokens (1% of the window)","~28,000 tokens (14% of the window)","Nothing: files are free to read"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **25 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~20,000 tokens (10% of the window)","Nothing: files are free to read","~800,000 tokens (400% of the window)","~200,000 tokens (100% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **42 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~336,000 tokens (168% of the window)","~1.34 million tokens (672% of the window)","Nothing: files are free to read","~33,600 tokens (17% of the window)"],"answer":0}]
---
# Agent Drill: Context budgets #10

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
