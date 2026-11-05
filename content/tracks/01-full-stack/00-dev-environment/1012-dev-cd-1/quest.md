---
slug: "dev-cd-1"
title: "Dev Drill: Navigating the terminal #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ../..\ncd /tmp\ncd ..\ncd ~\ncd ../..\npwd\n```\n\nWhat does `pwd` print?","options":["`//api`","`/`","`/home/ada/projects`","`/home/ada`"],"answer":1,"explanation":"You end up in `/`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ./docs\ncd -\ncd ~\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada`","`/home`","`/home/ada/api`","`/home/ada/projects`"],"answer":0,"explanation":"You end up in `/home/ada`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ../..\ncd src/routes\ncd /tmp\ncd ../web\npwd\n```\n\nWhat does `pwd` print?","options":["`/web`","`/home/ada/projects`","`/home/ada`","`/tmp`"],"answer":0,"explanation":"You end up in `/web`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd -\ncd ./docs\ncd src/routes\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects/docs/src/routes`","`/home/ada/projects`","`/home/ada`","`/home/ada/projects/docs`"],"answer":0,"explanation":"You end up in `/home/ada/projects/docs/src/routes`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd src/routes\ncd ../..\ncd ../web\ncd ~\ncd ..\npwd\n```\n\nWhat does `pwd` print?","options":["`/`","`/home/ada/projects`","`/home/ada`","`/home`"],"answer":3,"explanation":"You end up in `/home`."}]
---
# Dev Drill: Navigating the terminal #1

`cd dir` moves into a directory, `cd ..` goes up one level, `cd -` goes back to the previous directory, `cd ~` goes home, and a path starting with `/` is absolute. `pwd` prints where you are.
