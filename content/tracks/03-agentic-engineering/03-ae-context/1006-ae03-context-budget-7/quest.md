---
slug: "ae03-context-budget-7"
title: "Agent Drill: Context budgets #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **53 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~5300 tokens (3% of the window)","~53,000 tokens (27% of the window)","Nothing: files are free to read","~212,000 tokens (106% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **51 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~816,000 tokens (816% of the window)","~204,000 tokens (204% of the window)","~20,400 tokens (20% of the window)","Nothing: files are free to read"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **37 files** of about **800 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~296,000 tokens (148% of the window)","~1.18 million tokens (592% of the window)","~29,600 tokens (15% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **11 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~88,000 tokens (44% of the window)","~22,000 tokens (11% of the window)","~2200 tokens (1% of the window)","Nothing: files are free to read"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **11 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~1100 tokens (1% of the window)","~11,000 tokens (6% of the window)","~44,000 tokens (22% of the window)"],"answer":2}]
---
# Agent Drill: Context budgets #7

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
