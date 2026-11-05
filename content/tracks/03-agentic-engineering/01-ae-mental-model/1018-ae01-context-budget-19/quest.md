---
slug: "ae01-context-budget-19"
title: "Agent Drill: Context budgets #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"An agent is told to \"read the whole module\": **53 files** of about **800 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~424,000 tokens (424% of the window)","~1.7 million tokens (1696% of the window)","~42,400 tokens (42% of the window)","Nothing: files are free to read"],"answer":0},{"prompt":"An agent is told to \"read the whole module\": **17 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~1700 tokens (2% of the window)","~68,000 tokens (68% of the window)","Nothing: files are free to read","~17,000 tokens (17% of the window)"],"answer":3},{"prompt":"An agent is told to \"read the whole module\": **26 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~416,000 tokens (208% of the window)","Nothing: files are free to read","~104,000 tokens (52% of the window)","~10,400 tokens (5% of the window)"],"answer":2},{"prompt":"An agent is told to \"read the whole module\": **5 files** of about **400 lines** each (~10 tokens per line). Its context window is **200,000 tokens**. Roughly how much of the window does that use?","options":["~2000 tokens (1% of the window)","~20,000 tokens (10% of the window)","Nothing: files are free to read","~80,000 tokens (40% of the window)"],"answer":1},{"prompt":"An agent is told to \"read the whole module\": **46 files** of about **100 lines** each (~10 tokens per line). Its context window is **100,000 tokens**. Roughly how much of the window does that use?","options":["~46,000 tokens (46% of the window)","~4600 tokens (5% of the window)","~184,000 tokens (184% of the window)","Nothing: files are free to read"],"answer":0}]
---
# Agent Drill: Context budgets #19

Everything an agent reads costs context: roughly **4 characters per token** for English, and about 10 tokens per line of code. When the window fills, older content gets summarised or dropped. So point agents at specific files and trim the output you feed them.
