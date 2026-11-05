---
slug: "ae-agent-loop"
title: "The Agent Loop"
type: "quiz"
xp: 15
resources: [{"title": "Anthropic: Building effective agents", "url": "https://www.anthropic.com/engineering/building-effective-agents"}, {"title": "Claude Code overview", "url": "https://code.claude.com/docs/en/overview"}]
questions: [{"prompt": "What is a coding agent, at its core?", "options": ["A compiler", "A language model in a loop that chooses tool calls (read, edit, run) and sees their results", "A search engine"], "answer": 1}, {"prompt": "Where does the agent's knowledge about YOUR project come from?", "options": ["It memorised your repo during training", "Whatever is in its context: your messages, files it read, command output, context files", "Your browser history"], "answer": 1}, {"prompt": "Why is \"run the tests\" such a powerful instruction?", "options": ["Tests are fast", "Test output gives the agent real feedback on whether its code works, instead of guessing", "It makes the agent stop"], "answer": 1}, {"prompt": "The agent describes a function in a file it never opened. What should you assume?", "options": ["It is accurate", "It may be guessing: ask it to read the file, or check yourself", "It memorised the file"], "answer": 1}, {"prompt": "Does the agent remember your previous session tomorrow?", "options": ["Yes, always", "Not by itself: persistent knowledge must be written down (context files, docs, notes)", "Only on weekdays"], "answer": 1}]
---
# The Agent Loop

A coding agent is a **language model running in a loop with tools**:

```
1. Read the conversation so far (your request + everything that happened)
2. Decide on the next action: read a file, search, edit, run a command, or answer
3. The harness executes that tool and appends the result to the conversation
4. Repeat until the model decides it is done
```

The model itself has **no memory between sessions** and **no direct access** to your machine. Everything it knows about your project comes from what's in its **context**: your messages, files it has read, command output it has seen, and any context files (like `CLAUDE.md`) loaded at the start.

### What follows from this

- An agent can only be as good as the information in front of it. If it hasn't read a file, it is *guessing* what's in it.
- Tool results are its eyes: running the tests is how it **sees** whether the code works.
- It works fast and tirelessly, but it will happily continue down a wrong path if nothing in its context contradicts it.
- It's non-deterministic: the same request can produce different solutions.
