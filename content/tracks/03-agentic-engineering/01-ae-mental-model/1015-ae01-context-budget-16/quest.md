---
slug: "ae01-context-budget-16"
title: "Agent Drill: Context budgets #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **48 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~19,200 tokens (19% of the window)","~192,000 tokens (192% of the window)","~768,000 tokens (768% of the window)","Nothing: files are free to read"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **48 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~384,000 tokens (384% of the window)","~38,400 tokens (38% of the window)","~1.54 million tokens (1536% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **48 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~48,000 tokens (24% of the window)","Nothing: files are free to read","~192,000 tokens (96% of the window)","~4800 tokens (2% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **13 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~104,000 tokens (104% of the window)","~416,000 tokens (416% of the window)","~10,400 tokens (10% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **56 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~11,200 tokens (6% of the window)","~448,000 tokens (224% of the window)","Nothing: files are free to read","~112,000 tokens (56% of the window)"],"answer":3}]
---
# Agent Drill: Context budgets #16

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
