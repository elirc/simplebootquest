---
slug: "dev-cd-8"
title: "Dev Drill: Navigating the terminal #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ../web\ncd /tmp\ncd ./docs\ncd -\ncd ../web\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada`","`/home/ada/projects`","`/tmp`","`/web`"],"answer":3,"explanation":"You end up in `/web`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ../..\ncd api\ncd ..\ncd -\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada`","`/home`","`/home/api`","`/home/ada/projects`"],"answer":2,"explanation":"You end up in `/home/api`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ..\ncd ./docs\ncd /tmp\ncd ./docs\npwd\n```\n\nWhat does `pwd` print?","options":["`/tmp`","`/home/ada/projects`","`/tmp/docs`","`/home/ada`"],"answer":2,"explanation":"You end up in `/tmp/docs`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ./docs\ncd ./docs\ncd ../..\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects/docs/docs`","`/home/ada/projects`","`/home/ada/projects/api`","`/home/ada`"],"answer":1,"explanation":"You end up in `/home/ada/projects`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd -\ncd -\ncd ./docs\ncd -\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada`","`/home/ada/projects/docs`","`/home/ada/projects/api`","`/home/ada/projects`"],"answer":3,"explanation":"You end up in `/home/ada/projects`."}]
---
# Dev Drill: Navigating the terminal #8

`cd dir` moves into a directory, `cd ..` goes up one level, `cd -` goes back to the previous directory, `cd ~` goes home, and a path starting with `/` is absolute. `pwd` prints where you are.
