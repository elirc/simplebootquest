---
slug: "dev-cd-11"
title: "Dev Drill: Navigating the terminal #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ../..\ncd ~\ncd ./docs\ncd ~\ncd ~\npwd\n```\n\nWhat does `pwd` print?","options":["`/home`","`/home/ada/api`","`/home/ada/projects`","`/home/ada`"],"answer":3,"explanation":"You end up in `/home/ada`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ~\ncd ./docs\ncd ~\ncd src/routes\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/src`","`/home/ada/projects`","`/home/ada/src/routes`","`/home/ada`"],"answer":2,"explanation":"You end up in `/home/ada/src/routes`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ../web\ncd ./docs\ncd ../..\ncd -\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada`","`/home/ada/projects`","`/home/ada/web/docs`","`/home/ada/web`"],"answer":2,"explanation":"You end up in `/home/ada/web/docs`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ./docs\ncd -\ncd /tmp\ncd ../..\npwd\n```\n\nWhat does `pwd` print?","options":["`/tmp`","`/home/ada/projects`","`/home/ada`","`/`"],"answer":3,"explanation":"You end up in `/`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ../web\ncd -\ncd /tmp\ncd ..\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects`","`/tmp`","`/home/ada`","`/`"],"answer":3,"explanation":"You end up in `/`."}]
---
# Dev Drill: Navigating the terminal #11

`cd dir` moves into a directory, `cd ..` goes up one level, `cd -` goes back to the previous directory, `cd ~` goes home, and a path starting with `/` is absolute. `pwd` prints where you are.
