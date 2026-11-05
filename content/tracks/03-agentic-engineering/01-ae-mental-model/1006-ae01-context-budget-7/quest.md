---
slug: "ae01-context-budget-7"
title: "Agent Drill: Context budgets #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **11 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~352,000 tokens (176% of the window)","~88,000 tokens (44% of the window)","~8800 tokens (4% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **30 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~120,000 tokens (120% of the window)","~12,000 tokens (12% of the window)","Nothing: files are free to read","~480,000 tokens (480% of the window)"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **40 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~40,000 tokens (40% of the window)","~160,000 tokens (160% of the window)","~4000 tokens (4% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **12 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~384,000 tokens (384% of the window)","~96,000 tokens (96% of the window)","~9600 tokens (10% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **44 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~176,000 tokens (88% of the window)","Nothing: files are free to read","~17,600 tokens (9% of the window)","~704,000 tokens (352% of the window)"],"answer":0}]
---
# Agent Drill: Context budgets #7

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
