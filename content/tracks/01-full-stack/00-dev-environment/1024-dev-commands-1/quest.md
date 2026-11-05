---
slug: "dev-commands-1"
title: "Dev Drill: The right command for the job #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"Which command would you use to **follow a log file as it grows**?","options":["`curl -i http://localhost:3000/api/health`","`npm install <pkg>`","`echo $DATABASE_URL`","`tail -f app.log`"],"answer":3},{"prompt":"Which command would you use to **run the \"test\" script from package.json**?","options":["`npm test`","`grep -rn \"text\" src/`","`npm install <pkg>`","`echo $DATABASE_URL`"],"answer":0},{"prompt":"Which command would you use to **install exactly the versions in package-lock.json (CI)**?","options":["`npx <tool>`","`git restore <file>`","`npm ci`","`git switch -c <name>`"],"answer":2},{"prompt":"Which command would you use to **search for text in all files under a folder**?","options":["`grep -rn \"text\" src/`","`tail -f app.log`","`git restore <file>`","`npx <tool>`"],"answer":0},{"prompt":"Which command would you use to **see who last changed each line of a file**?","options":["`git bisect`","`ls -la`","`npx <tool>`","`git blame <file>`"],"answer":3}]
---
# Dev Drill: The right command for the job #1

A small set of commands covers most daily work. Learn what each one is *for*, then reach for the docs (`--help`, `man`) for the details.
