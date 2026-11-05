---
slug: "ae03-context-budget-2"
title: "Agent Drill: Context budgets #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **41 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~164,000 tokens (164% of the window)","Nothing: files are free to read","~4100 tokens (4% of the window)","~41,000 tokens (41% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **37 files** of about **100 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~148,000 tokens (74% of the window)","~3700 tokens (2% of the window)","~37,000 tokens (19% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **23 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["Nothing: files are free to read","~4600 tokens (2% of the window)","~184,000 tokens (92% of the window)","~46,000 tokens (23% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **35 files** of about **200 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~280,000 tokens (140% of the window)","~70,000 tokens (35% of the window)","Nothing: files are free to read","~7000 tokens (4% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **58 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~1.86 million tokens (1856% of the window)","~46,400 tokens (46% of the window)","Nothing: files are free to read","~464,000 tokens (464% of the window)"],"answer":3}]
---
# Agent Drill: Context budgets #2

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
