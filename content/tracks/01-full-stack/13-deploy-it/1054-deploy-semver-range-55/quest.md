---
slug: "deploy-semver-range-55"
title: "Deploy Drill: Which version does npm install? #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"~1.4.2\"`. The registry has: `1.3.9`, `1.4.2`, `1.4.4`, `1.5.0`, `1.7.2`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.4.2`","`1.4.4`","`1.3.9`","`1.5.0`"],"answer":1,"explanation":"`1.4.4` is the highest version matching `~1.4.2`."},{"prompt":"`package.json` has `\"some-lib\": \"^2.5.3\"`. The registry has: `2.4.9`, `2.5.3`, `2.5.5`, `2.6.0`, `2.8.2`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.8.2`","`2.5.3`","`2.4.9`","`2.5.5`"],"answer":0,"explanation":"`2.8.2` is the highest version matching `^2.5.3`."},{"prompt":"`package.json` has `\"some-lib\": \"0.2.4\"`. The registry has: `0.1.9`, `0.2.4`, `0.2.7`, `0.3.0`, `0.5.0`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.1.9`","`0.2.7`","`0.3.0`","`0.2.4`"],"answer":3,"explanation":"`0.2.4` is the highest version matching `0.2.4`."},{"prompt":"`package.json` has `\"some-lib\": \"3.5.2\"`. The registry has: `3.4.9`, `3.5.2`, `3.5.4`, `3.6.0`, `3.7.2`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.4.9`","`3.5.4`","`3.5.2`","`3.6.0`"],"answer":2,"explanation":"`3.5.2` is the highest version matching `3.5.2`."},{"prompt":"`package.json` has `\"some-lib\": \"^2.0.3\"`. The registry has: `2.0.3`, `2.0.4`, `2.0.9`, `2.1.0`, `2.3.2`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.0.4`","`2.3.2`","`2.0.3`","`2.0.9`"],"answer":1,"explanation":"`2.3.2` is the highest version matching `^2.0.3`."}]
---
# Deploy Drill: Which version does npm install? #55

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
