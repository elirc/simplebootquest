---
slug: "dev-cd-3"
title: "Dev Drill: Navigating the terminal #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd api\ncd -\ncd -\ncd ..\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects/api`","`/home/ada`","`/home/ada/projects`"],"answer":2,"explanation":"You end up in `/home/ada/projects`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ..\ncd /tmp\ncd ./docs\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects`","`/tmp/docs`","`/home/ada`","`/tmp`"],"answer":1,"explanation":"You end up in `/tmp/docs`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ../..\ncd src/routes\ncd ../web\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects`","`/home/src/routes`","`/home/src/web`","`/home/ada`"],"answer":2,"explanation":"You end up in `/home/src/web`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd /tmp\ncd -\ncd ./docs\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects/docs`","`/home/ada`","`/home/ada/projects/docs/api`","`/home/ada/projects`"],"answer":0,"explanation":"You end up in `/home/ada/projects/docs`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ..\ncd ../..\ncd -\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects`","`/home`","`/home/ada`","`/`"],"answer":2,"explanation":"You end up in `/home/ada`."}]
---
# Dev Drill: Navigating the terminal #3

`cd dir` moves into a directory, `cd ..` goes up one level, `cd -` goes back to the previous directory, `cd ~` goes home, and a path starting with `/` is absolute. `pwd` prints where you are.
