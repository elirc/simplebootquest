---
slug: "ae01-context-budget-21"
title: "Agent Drill: Context budgets #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **13 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~13,000 tokens (13% of the window)","Nothing: files are free to read","~1300 tokens (1% of the window)","~52,000 tokens (52% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **47 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~376,000 tokens (376% of the window)","~37,600 tokens (38% of the window)","Nothing: files are free to read","~1.5 million tokens (1504% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **41 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~16,400 tokens (8% of the window)","Nothing: files are free to read","~164,000 tokens (82% of the window)","~656,000 tokens (328% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **19 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~38,000 tokens (19% of the window)","Nothing: files are free to read","~152,000 tokens (76% of the window)","~3800 tokens (2% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **18 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~144,000 tokens (72% of the window)","~36,000 tokens (18% of the window)","~3600 tokens (2% of the window)"],"answer":2}]
---
# Agent Drill: Context budgets #21

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
