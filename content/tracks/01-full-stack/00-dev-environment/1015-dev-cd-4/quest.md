---
slug: "dev-cd-4"
title: "Dev Drill: Navigating the terminal #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Git, Terminal & Debugging"
questions: [{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd src/routes\ncd ~\ncd -\ncd -\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/projects/src/routes`","`/home/ada/projects`","`/home/ada`","`/home`"],"answer":2,"explanation":"You end up in `/home/ada`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd -\ncd ./docs\ncd ../web\ncd api\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada`","`/home/ada/projects/web`","`/home/ada/projects/web/api`","`/home/ada/projects`"],"answer":2,"explanation":"You end up in `/home/ada/projects/web/api`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd ./docs\ncd /tmp\ncd ..\npwd\n```\n\nWhat does `pwd` print?","options":["`/tmp`","`/home/ada`","`/home/ada/projects`","`/`"],"answer":3,"explanation":"You end up in `/`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd /tmp\ncd -\ncd ../web\ncd ../web\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada/web/api`","`/home/ada`","`/home/ada/web`","`/home/ada/projects`"],"answer":2,"explanation":"You end up in `/home/ada/web`."},{"prompt":"You start in `/home/ada/projects`.\n\n```bash\ncd -\ncd ~\ncd ~\ncd ../web\npwd\n```\n\nWhat does `pwd` print?","options":["`/home/ada`","`/home/ada/projects`","`/home/web`","`/home`"],"answer":2,"explanation":"You end up in `/home/web`."}]
---
# Dev Drill: Navigating the terminal #4

`cd dir` moves into a directory, `cd ..` goes up one level, `cd -` goes back to the previous directory, `cd ~` goes home, and a path starting with `/` is absolute. `pwd` prints where you are.
