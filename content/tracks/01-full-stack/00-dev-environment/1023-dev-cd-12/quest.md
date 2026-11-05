---
slug: "dev-cd-12"
title: "Dev Drill: Navigating the terminal #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd api\ncd ../web\ncd ./docs\ncd src/routes\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects/web/docs`","`/home/ada/projects/web/docs/src/routes`","`/home/ada`","`/home/ada/projects`"],"answer":1,"explanation":"You end up in `/home/ada/projects/web/docs/src/routes`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ../..\ncd ../..\ncd ~\ncd ..\ncd ./docs\npwd\n```\n\nWhat does `pwd` print?","options":["`/home`","`/home/ada/projects`","`/home/docs`","`/home/ada`"],"answer":2,"explanation":"You end up in `/home/docs`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd -\ncd ../web\ncd ../web\ncd ../web\ncd /tmp\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/web`","`/home/ada`","`/home/ada/projects`","`/tmp`"],"answer":3,"explanation":"You end up in `/tmp`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd -\ncd /tmp\ncd -\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects/api`","`/home/ada/projects`","`/home/ada`","`/tmp`"],"answer":1,"explanation":"You end up in `/home/ada/projects`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ../..\ncd -\ncd api\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects/api/api`","`/home/ada`","`/home/ada/projects/api`","`/home/ada/projects`"],"answer":2,"explanation":"You end up in `/home/ada/projects/api`."}]
---
# Dev Drill: Navigating the terminal #12

`cd dir` moves into a directory, `cd ..` goes up one level, `cd -` goes back to the previous directory, `cd ~` goes home, and a path starting with `/` is absolute. `pwd` prints where you are.
