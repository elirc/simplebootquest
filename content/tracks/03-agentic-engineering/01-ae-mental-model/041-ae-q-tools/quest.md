---
slug: "ae-q-tools"
title: "Tools: How Agents Act"
type: "quiz"
xp: 15
questions: [{"prompt": "An agent confidently describes a function it never opened. What is happening?", "options": ["It read it secretly", "It is guessing from names and patterns, so verify by having it read the file", "Agents index everything automatically"], "answer": 1}, {"prompt": "Which tool category carries the highest risk?", "options": ["Reading files", "Executing shell commands and calling external services", "Listing directories"], "answer": 1}, {"prompt": "Why does pasting a 5,000-line log into the session hurt?", "options": ["It does not", "It fills the context window and pushes out more useful information", "Logs are always wrong"], "answer": 1}, {"prompt": "Where do you verify what an agent really did?", "options": ["Its final summary only", "The tool calls and the diff", "Its confidence level"], "answer": 1}, {"prompt": "Is a read-only agent completely safe?", "options": ["Yes", "Not entirely: it can still read secrets and, with network tools, send them somewhere"], "answer": 1}]
---
# Tools: How Agents Act

A language model on its own only produces text. A **coding agent** is a model in a loop with **tools**. The model asks for a tool call, the harness runs it, and the result goes back into the context:

| Tool kind | Examples | Risk |
|-----------|----------|------|
| Read | read file, search (grep/glob), list directory | Low (it can still read secrets!) |
| Write | edit file, create file | Medium: changes your code |
| Execute | run shell commands, tests, scripts | High: anything your shell can do |
| External | web fetch, MCP servers (GitHub, databases, Slack) | High: data leaves or enters your machine |

Some things follow from this:
- The agent **only knows what it has read**. If it never opened `auth.ts`, it's guessing about it.
- Tool output is **input to the model**. Long test logs or huge files use up the context.
- Permissions are about **tools**: allowing "read files" is very different from allowing "run any command".
- A good harness shows you each tool call, so you can see what it actually did, not just what it says it did.
