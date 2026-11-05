---
slug: "ae03-context-budget-11"
title: "Agent Drill: Context budgets #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **36 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~1.15 million tokens (576% of the window)","~28,800 tokens (14% of the window)","~288,000 tokens (144% of the window)","Nothing: files are free to read"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **25 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~400,000 tokens (200% of the window)","~10,000 tokens (5% of the window)","~100,000 tokens (50% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **13 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~13,000 tokens (13% of the window)","~52,000 tokens (52% of the window)","~1300 tokens (1% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **46 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~184,000 tokens (184% of the window)","~736,000 tokens (736% of the window)","~18,400 tokens (18% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **48 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~4800 tokens (5% of the window)","~192,000 tokens (192% of the window)","~48,000 tokens (48% of the window)","Nothing: files are free to read"],"answer":2}]
---
# Agent Drill: Context budgets #11

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
