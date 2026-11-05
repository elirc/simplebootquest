---
slug: "ae-context-windows"
title: "Context Windows & Tokens"
type: "quiz"
xp: 15
resources: [{"title": "Anthropic: Effective context engineering for AI agents", "url": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"}]
questions: [{"prompt": "What fills up an agent's context window?", "options": ["Only your messages", "Instructions, files read, tool output and the agent's own messages", "Nothing: it is unlimited"], "answer": 1}, {"prompt": "A session has been running for hours on many unrelated tasks. A good move is…", "options": ["Keep going in the same session forever", "Start a fresh session for the next unrelated task", "Paste the whole repo in"], "answer": 1}, {"prompt": "What can happen when a conversation is compacted (summarised)?", "options": ["Nothing is lost", "Specific details from earlier can be lost or blurred", "The agent gets faster at everything"], "answer": 1}, {"prompt": "Which instruction uses context most efficiently?", "options": ["\"Read every file in the repo first\"", "\"The bug is in src/services/progress.ts around the streak calculation: read that and its test\"", "\"Figure it out\""], "answer": 1}, {"prompt": "Where should \"always run npm run validate:content after editing content\" live?", "options": ["In your head", "In a project context file (e.g. CLAUDE.md) so every session sees it", "In a code comment in one random file"], "answer": 1}]
---
# Context Windows & Tokens

Models read and write **tokens** (word fragments). The **context window** is how many tokens the model can consider at once: your instructions, the files it read, tool output, and its own previous messages.

### Why context is a budget

- Every file read, long log and verbose command output **uses up** context.
- As a session grows, the details you mentioned early on compete for attention with everything that came after.
- When the window fills up, tools **compact** (summarise) older parts of the conversation. Details can be lost in the summary.

### Practical habits

- **One task per session** where possible. Start fresh for unrelated work.
- Point the agent at the **specific** files that matter, rather than "read the whole repo".
- Trim noisy output: `npm test -- --reporter=dot`, `| tail -50`, `grep` instead of `cat`.
- Put durable facts (commands, conventions) in a **context file**, not in a message you'll have to repeat.
- For long tasks, keep a written plan or progress file the agent can re-read.

Context engineering (deciding what goes into the window) is one of the biggest levers on agent quality.
