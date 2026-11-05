---
slug: "dev-cd-9"
title: "Dev Drill: Navigating the terminal #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd api\ncd ../web\ncd ../..\ncd ./docs\ncd ../web\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects`","`/home/ada/web`","`/home/ada/docs`","`/home/ada`"],"answer":1,"explanation":"You end up in `/home/ada/web`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd -\ncd ./docs\ncd -\ncd src/routes\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada`","`/home/ada/projects`","`/home/ada/projects/src`","`/home/ada/projects/src/routes`"],"answer":3,"explanation":"You end up in `/home/ada/projects/src/routes`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd api\ncd ../web\ncd /tmp\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects`","`/home/ada/projects/web`","`/tmp`","`/home/ada`"],"answer":2,"explanation":"You end up in `/tmp`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ../..\ncd src/routes\ncd ./docs\ncd ../web\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/src/routes/docs`","`/home/ada/projects`","`/home/src/routes/web`","`/home/ada`"],"answer":2,"explanation":"You end up in `/home/src/routes/web`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd /tmp\ncd /tmp\ncd api\ncd /tmp\npwd\n```\n\nWhat does `pwd` print?","options":["`/tmp`","`/home/ada/projects`","`/home/ada`","`/tmp/api`"],"answer":0,"explanation":"You end up in `/tmp`."}]
---
# Dev Drill: Navigating the terminal #9

`cd dir` moves into a directory, `cd ..` goes up one level, `cd -` goes back to the previous directory, `cd ~` goes home, and a path starting with `/` is absolute. `pwd` prints where you are.
