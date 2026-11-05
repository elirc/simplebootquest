---
slug: "dev-cd-7"
title: "Dev Drill: Navigating the terminal #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd api\ncd ../web\ncd ../..\ncd ../..\npwd\n```\n\nWhat does `pwd` print?","options":["`/`","`/home/ada`","`//api`","`/home/ada/projects`"],"answer":0,"explanation":"You end up in `/`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ..\ncd src/routes\ncd ..\ncd ~\npwd\n```\n\nWhat does `pwd` print?","options":["`/home`","`/home/ada/projects`","`/home/ada`","`/home/ada/src`"],"answer":2,"explanation":"You end up in `/home/ada`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ..\ncd ..\ncd ..\ncd ../web\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects`","`/web`","`/`","`/home/ada`"],"answer":1,"explanation":"You end up in `/web`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ../web\ncd -\ncd src/routes\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects`","`/home/ada/projects/src`","`/home/ada`","`/home/ada/projects/src/routes`"],"answer":3,"explanation":"You end up in `/home/ada/projects/src/routes`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ./docs\ncd ~\ncd src/routes\ncd ..\ncd ~\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada`","`/home/ada/projects`","`/home/ada/src`","`/home`"],"answer":0,"explanation":"You end up in `/home/ada`."}]
---
# Dev Drill: Navigating the terminal #7

`cd dir` moves into a directory, `cd ..` goes up one level, `cd -` goes back to the previous directory, `cd ~` goes home, and a path starting with `/` is absolute. `pwd` prints where you are.
