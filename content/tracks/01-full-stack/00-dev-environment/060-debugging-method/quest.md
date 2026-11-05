---
slug: "dev-debugging-method"
title: "Debugging Like a Professional"
type: "quiz"
xp: 15
resources: [{"title": "VS Code: Node.js debugging", "url": "https://code.visualstudio.com/docs/nodejs/nodejs-debugging"}]
questions: [{"prompt": "What is the first step when a bug is reported?", "options": ["Rewrite the module", "Reproduce it reliably", "Ask for a new laptop"], "answer": 1}, {"prompt": "In a stack trace, where should you usually start?", "options": ["The last line", "The first line that points at your own code", "Any line inside node_modules"], "answer": 1}, {"prompt": "`TypeError: Cannot read properties of undefined (reading 'name')`. What does it mean?", "options": ["The name property is misspelled in the database", "Something you expected to be an object is undefined at that line", "JavaScript is out of memory"], "answer": 1}, {"prompt": "What should happen to the reproduction once the bug is fixed?", "options": ["Delete it", "Keep it as a regression test", "Comment it out"], "answer": 1}, {"prompt": "Which tool finds the commit that introduced a regression by binary search?", "options": ["git blame", "git bisect", "git stash"], "answer": 1}]
---
# Debugging Like a Professional

Beginners change things until the error goes away. Professionals follow a loop:

1. **Reproduce** the bug reliably (a failing test or a command is ideal).
2. **Read the error**: the message, then the **stack trace**, starting from the first line in *your* code.
3. **Hypothesise**: "`user` is undefined because the lookup used the wrong id".
4. **Test the hypothesis** with evidence: a `console.log`, a breakpoint (`debugger;` or VS Code's debugger), or `node --inspect`.
5. **Fix**, then confirm the reproduction passes, and keep it as a regression test.

The fastest tools: read the full error message, `console.log` the values just before the failing line, and use **binary search** (comment out half the code, or `git bisect` across commits).
