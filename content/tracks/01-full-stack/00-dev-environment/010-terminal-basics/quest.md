---
slug: "dev-terminal-basics"
title: "The Terminal in 10 Minutes"
type: "quiz"
xp: 15
resources: [{"title": "MDN: Command line crash course", "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"}]
questions: [{"prompt": "You are in `/home/ada/projects/api` and run `cd ../web`. Where are you now?", "options": ["/home/ada/projects/api/web", "/home/ada/projects/web", "/home/ada/web"], "answer": 1}, {"prompt": "Which command shows hidden files such as `.env`?", "options": ["ls", "ls -la", "pwd"], "answer": 1}, {"prompt": "Your dev server is running in the terminal. How do you stop it?", "options": ["Close the laptop", "Ctrl+C", "Type exit and wait"], "answer": 1}, {"prompt": "Is `rm -r node_modules` reversible from a recycle bin?", "options": ["Yes", "No: deleted files are gone (node_modules can be reinstalled with npm install, though)"], "answer": 1}, {"prompt": "What does `cd -` do?", "options": ["Goes to the root folder", "Returns to the previous directory", "Deletes the current folder"], "answer": 1}]
---
# The Terminal in 10 Minutes

The terminal is how developers run tools: dev servers, tests, git, database migrations. You only need a dozen commands to be productive.

| Command | Does |
|---------|------|
| `pwd` | Print the working directory (where am I?) |
| `ls -la` | List files, including hidden ones like `.env` and `.git` |
| `cd folder`, `cd ..`, `cd ~`, `cd -` | Move into a folder, up one level, home, back to the previous folder |
| `mkdir -p a/b` | Create folders |
| `cat file`, `less file` | Show a file |
| `rm file`, `rm -r folder` | Delete (there is **no recycle bin**) |
| `code .` | Open the current folder in VS Code |
| `Ctrl+C` | Stop the running program (e.g. a dev server) |
| `↑` / `Ctrl+R` | Previous commands / search history |

**Paths**: `/home/ada/app` is **absolute** (starts at the root). `src/app.ts` is **relative** to where you are. `.` is "here" and `..` is "the parent".
