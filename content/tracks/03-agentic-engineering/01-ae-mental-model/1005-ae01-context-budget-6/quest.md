---
slug: "ae01-context-budget-6"
title: "Agent Drill: Context budgets #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **35 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~140,000 tokens (140% of the window)","Nothing: files are free to read","~3500 tokens (4% of the window)","~35,000 tokens (35% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **53 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~424,000 tokens (424% of the window)","Nothing: files are free to read","~10,600 tokens (11% of the window)","~106,000 tokens (106% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **15 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~480,000 tokens (240% of the window)","~120,000 tokens (60% of the window)","Nothing: files are free to read","~12,000 tokens (6% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **57 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~912,000 tokens (912% of the window)","~22,800 tokens (23% of the window)","~228,000 tokens (228% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **10 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~8000 tokens (4% of the window)","~80,000 tokens (40% of the window)","Nothing: files are free to read","~320,000 tokens (160% of the window)"],"answer":1}]
---
# Agent Drill: Context budgets #6

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
