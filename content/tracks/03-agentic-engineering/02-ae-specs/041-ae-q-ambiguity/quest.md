---
slug: "ae-q-ambiguity"
title: "Spotting Ambiguity Before the Agent Does"
type: "quiz"
xp: 15
questions: [{"prompt": "\"Add search to todos\". Which detail matters MOST to pin down?", "options": ["The font of the search box", "Which fields are searched and how matching works (contains, case-insensitivity)", "The commit message"], "answer": 1}, {"prompt": "What does an agent usually do with an ambiguous instruction?", "options": ["Refuses", "Picks one interpretation and implements it confidently", "Implements every interpretation"], "answer": 1}, {"prompt": "A cheap way to surface ambiguity before any code is written?", "options": ["Start coding and see", "Ask the agent to list its questions and assumptions first", "Write a longer prompt with no details"], "answer": 1}, {"prompt": "\"Show recent activity\". What is ambiguous?", "options": ["Nothing", "What \"recent\" means (a time window or a count) and what counts as activity", "The word \"show\""], "answer": 1}, {"prompt": "\"Users can delete their posts\". Which question should you answer?", "options": ["Hard or soft delete, and what happens to replies or comments", "Tabs or spaces", "The colour of the button"], "answer": 0}]
---
# Spotting Ambiguity Before the Agent Does

An agent faced with an ambiguous request rarely stops to ask. It **picks an interpretation** and builds it confidently. Your job is to remove the ambiguity first.

Classic ambiguities in CRUD work:
- **"Add search"**: by which fields? Prefix, contains, or full-text? Case-sensitive? Paginated? Where is it in the UI?
- **"Users can delete posts"**: hard or soft delete? Their own only, or admins too? What happens to the comments?
- **"Make it faster"**: which page, measured how, and by how much?
- **"Handle errors"**: which errors, shown to whom, logged where?
- **Words with two meanings**: "archive", "user" (account or person?), "recent" (24 h? 7 days?).

A useful habit: before handing over a task, ask the agent to **list its questions and assumptions** without writing code. Answer them, and put the answers in the spec.
