---
slug: "ae01-context-budget-15"
title: "Agent Drill: Context budgets #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **14 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~1400 tokens (1% of the window)","~14,000 tokens (7% of the window)","Nothing: files are free to read","~56,000 tokens (28% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **25 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~200,000 tokens (200% of the window)","~20,000 tokens (20% of the window)","~800,000 tokens (800% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **60 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~12,000 tokens (6% of the window)","~480,000 tokens (240% of the window)","~120,000 tokens (60% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **24 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~48,000 tokens (48% of the window)","~192,000 tokens (192% of the window)","~4800 tokens (5% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **22 files** of about **200 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~176,000 tokens (176% of the window)","~4400 tokens (4% of the window)","~44,000 tokens (44% of the window)","Nothing: files are free to read"],"answer":2}]
---
# Agent Drill: Context budgets #15

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
