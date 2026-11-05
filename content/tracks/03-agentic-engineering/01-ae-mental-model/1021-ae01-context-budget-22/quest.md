---
slug: "ae01-context-budget-22"
title: "Agent Drill: Context budgets #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **40 files** of about **400 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~640,000 tokens (640% of the window)","Nothing: files are free to read","~16,000 tokens (16% of the window)","~160,000 tokens (160% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **11 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~4400 tokens (2% of the window)","Nothing: files are free to read","~176,000 tokens (88% of the window)","~44,000 tokens (22% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **49 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~4900 tokens (5% of the window)","Nothing: files are free to read","~196,000 tokens (196% of the window)","~49,000 tokens (49% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **35 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~7000 tokens (4% of the window)","~70,000 tokens (35% of the window)","~280,000 tokens (140% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **18 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~1800 tokens (2% of the window)","Nothing: files are free to read","~72,000 tokens (72% of the window)","~18,000 tokens (18% of the window)"],"answer":3}]
---
# Agent Drill: Context budgets #22

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
