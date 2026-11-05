---
slug: "deploy-semver-range-41"
title: "Deploy Drill: Which version does npm install? #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"^2.3.3\"`. The registry has: `2.2.9`, `2.3.3`, `2.3.5`, `2.4.0`, `2.6.0`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.3.5`","`2.2.9`","`2.6.0`","`2.3.3`"],"answer":2,"explanation":"`2.6.0` is the highest version matching `^2.3.3`."},{"prompt":"`package.json` has `\"some-lib\": \"~3.0.4\"`. The registry has: `3.0.4`, `3.0.7`, `3.0.9`, `3.1.0`, `3.2.1`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.0.9`","`3.1.0`","`3.0.4`","`3.0.7`"],"answer":0,"explanation":"`3.0.9` is the highest version matching `~3.0.4`."},{"prompt":"`package.json` has `\"some-lib\": \"~0.2.2\"`. The registry has: `0.1.9`, `0.2.2`, `0.2.4`, `0.3.0`, `0.5.1`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.1.9`","`0.2.4`","`0.3.0`","`0.2.2`"],"answer":1,"explanation":"`0.2.4` is the highest version matching `~0.2.2`."},{"prompt":"`package.json` has `\"some-lib\": \"~1.0.4\"`. The registry has: `1.0.4`, `1.0.5`, `1.0.9`, `1.1.0`, `1.2.2`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.0.9`","`1.0.5`","`1.0.4`","`1.1.0`"],"answer":0,"explanation":"`1.0.9` is the highest version matching `~1.0.4`."},{"prompt":"`package.json` has `\"some-lib\": \"2.1.3\"`. The registry has: `2.0.9`, `2.1.3`, `2.1.5`, `2.2.0`, `2.3.1`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.1.5`","`2.0.9`","`2.2.0`","`2.1.3`"],"answer":3,"explanation":"`2.1.3` is the highest version matching `2.1.3`."}]
---
# Deploy Drill: Which version does npm install? #41

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
