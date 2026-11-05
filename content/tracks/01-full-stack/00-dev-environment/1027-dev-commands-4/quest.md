---
slug: "dev-commands-4"
title: "Dev Drill: The right command for the job #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"Which command would you use to **run a package's CLI without installing it globally**?","options":["`git bisect`","`npx <tool>`","`npm test`","`echo $DATABASE_URL`"],"answer":1},{"prompt":"Which command would you use to **add a dev-only dependency (like vitest)**?","options":["`git stash`","`npm install -D <pkg>`","`npx <tool>`","`tail -f app.log`"],"answer":1},{"prompt":"Which command would you use to **see which process is listening on port 3000**?","options":["`tail -f app.log`","`git diff`","`lsof -i :3000`","`git restore <file>`"],"answer":2},{"prompt":"Which command would you use to **find which commit introduced a bug**?","options":["`git bisect`","`git add -p`","`npx <tool>`","`git stash`"],"answer":0},{"prompt":"Which command would you use to **see the exact line-by-line changes before committing**?","options":["`npm audit`","`git add -p`","`git diff`","`node --inspect-brk script.js`"],"answer":2}]
---
# Dev Drill: The right command for the job #4

A small set of commands covers most daily work. Learn what each one is *for*, then reach for the docs (`--help`, `man`) for the details.
