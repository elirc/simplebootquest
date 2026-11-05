---
slug: "dev-cd-2"
title: "Dev Drill: Navigating the terminal #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ~\ncd ./docs\ncd ~\npwd\n```\n\nWhat does `pwd` print?","options":["`/home`","`/home/ada/docs`","`/home/ada/projects`","`/home/ada`"],"answer":3,"explanation":"You end up in `/home/ada`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ../..\ncd -\ncd -\ncd ~\ncd ../web\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects`","`/home/web`","`/home/ada`","`/home`"],"answer":1,"explanation":"You end up in `/home/web`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd src/routes\ncd ./docs\ncd ..\ncd ..\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects/src`","`/home/ada`","`/home/ada/projects/src/routes`","`/home/ada/projects`"],"answer":0,"explanation":"You end up in `/home/ada/projects/src`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd src/routes\ncd api\ncd ~\ncd ~\ncd api\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/api`","`/home/ada/projects`","`/home/ada/api/api`","`/home/ada`"],"answer":0,"explanation":"You end up in `/home/ada/api`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ..\ncd ../web\ncd src/routes\ncd ..\ncd ./docs\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects`","`/home/web/src`","`/home/ada`","`/home/web/src/docs`"],"answer":3,"explanation":"You end up in `/home/web/src/docs`."}]
---
# Dev Drill: Navigating the terminal #2

`cd dir` moves into a directory, `cd ..` goes up one level, `cd -` goes back to the previous directory, `cd ~` goes home, and a path starting with `/` is absolute. `pwd` prints where you are.
