---
slug: "dev-cd-10"
title: "Dev Drill: Navigating the terminal #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd -\ncd src/routes\ncd ./docs\ncd /tmp\ncd ~\npwd\n```\n\nWhat does `pwd` print?","options":["`/tmp`","`/home`","`/home/ada/projects`","`/home/ada`"],"answer":3,"explanation":"You end up in `/home/ada`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd api\ncd ../..\ncd ..\ncd ./docs\npwd\n```\n\nWhat does `pwd` print?","options":["`/home`","`/home/ada`","`/home/ada/projects`","`/home/docs`"],"answer":3,"explanation":"You end up in `/home/docs`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd src/routes\ncd src/routes\ncd ..\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects`","`/home/ada/projects/src/routes/src/routes`","`/home/ada`","`/home/ada/projects/src/routes/src`"],"answer":3,"explanation":"You end up in `/home/ada/projects/src/routes/src`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ~\ncd ./docs\ncd api\ncd ~\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada`","`/home`","`/home/ada/projects`","`/home/ada/docs/api`"],"answer":0,"explanation":"You end up in `/home/ada`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ~\ncd ../web\ncd ../..\npwd\n```\n\nWhat does `pwd` print?","options":["`/`","`/home/ada`","`/home/web`","`/home/ada/projects`"],"answer":0,"explanation":"You end up in `/`."}]
---
# Dev Drill: Navigating the terminal #10

`cd dir` moves into a directory, `cd ..` goes up one level, `cd -` goes back to the previous directory, `cd ~` goes home, and a path starting with `/` is absolute. `pwd` prints where you are.
