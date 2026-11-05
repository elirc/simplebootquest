---
slug: "dev-cd-6"
title: "Dev Drill: Navigating the terminal #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd api\ncd ..\ncd src/routes\ncd ../web\ncd ./docs\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects/src/web`","`/home/ada/projects/src/web/docs`","`/home/ada`","`/home/ada/projects`"],"answer":1,"explanation":"You end up in `/home/ada/projects/src/web/docs`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ../..\ncd /tmp\ncd -\ncd ../web\ncd src/routes\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada`","`/home/ada/projects`","`/web/src/routes`","`/web`"],"answer":2,"explanation":"You end up in `/web/src/routes`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd api\ncd /tmp\ncd ../web\ncd src/routes\npwd\n```\n\nWhat does `pwd` print?","options":["`/web`","`/web/src/routes`","`/home/ada/projects`","`/home/ada`"],"answer":1,"explanation":"You end up in `/web/src/routes`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd /tmp\ncd ..\ncd /tmp\ncd src/routes\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada`","`/tmp`","`/home/ada/projects`","`/tmp/src/routes`"],"answer":3,"explanation":"You end up in `/tmp/src/routes`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd src/routes\ncd /tmp\ncd ../web\ncd src/routes\ncd ../web\npwd\n```\n\nWhat does `pwd` print?","options":["`/web/src/web`","`/home/ada/projects`","`/home/ada`","`/web/src/routes`"],"answer":0,"explanation":"You end up in `/web/src/web`."}]
---
# Dev Drill: Navigating the terminal #6

`cd dir` moves into a directory, `cd ..` goes up one level, `cd -` goes back to the previous directory, `cd ~` goes home, and a path starting with `/` is absolute. `pwd` prints where you are.
