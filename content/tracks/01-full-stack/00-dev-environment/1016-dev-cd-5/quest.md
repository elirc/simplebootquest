---
slug: "dev-cd-5"
title: "Dev Drill: Navigating the terminal #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd -\ncd -\ncd src/routes\ncd api\ncd src/routes\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects/src/routes/api`","`/home/ada`","`/home/ada/projects`","`/home/ada/projects/src/routes/api/src/routes`"],"answer":3,"explanation":"You end up in `/home/ada/projects/src/routes/api/src/routes`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ../web\ncd api\ncd ../..\ncd ../web\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada`","`/home/web`","`/home/ada/projects`","`/home`"],"answer":1,"explanation":"You end up in `/home/web`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ../web\ncd ..\ncd src/routes\ncd /tmp\ncd /tmp\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects`","`/`","`/home/ada`","`/tmp`"],"answer":3,"explanation":"You end up in `/tmp`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ..\ncd ../..\ncd ../web\npwd\n```\n\nWhat does `pwd` print?","options":["`/`","`/home/ada`","`/web`","`/home/ada/projects`"],"answer":2,"explanation":"You end up in `/web`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd /tmp\ncd ./docs\ncd ../..\npwd\n```\n\nWhat does `pwd` print?","options":["`/`","`/tmp/docs`","`/home/ada/projects`","`/home/ada`"],"answer":0,"explanation":"You end up in `/`."}]
---
# Dev Drill: Navigating the terminal #5

`cd dir` moves into a directory, `cd ..` goes up one level, `cd -` goes back to the previous directory, `cd ~` goes home, and a path starting with `/` is absolute. `pwd` prints where you are.
