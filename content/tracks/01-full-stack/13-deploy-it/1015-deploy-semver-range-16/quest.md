---
slug: "deploy-semver-range-16"
title: "Deploy Drill: Which version does npm install? #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"~1.0.0\"`. The registry has: `1.0.0`, `1.0.3`, `1.0.9`, `1.1.0`, `1.3.2`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.0.3`","`1.0.0`","`1.0.9`","`1.1.0`"],"answer":2,"explanation":"`1.0.9` is the highest version matching `~1.0.0`."},{"prompt":"`package.json` has `\"some-lib\": \"2.5.1\"`. The registry has: `2.4.9`, `2.5.1`, `2.5.4`, `2.6.0`, `2.8.2`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.6.0`","`2.5.1`","`2.5.4`","`2.4.9`"],"answer":1,"explanation":"`2.5.1` is the highest version matching `2.5.1`."},{"prompt":"`package.json` has `\"some-lib\": \"^3.4.3\"`. The registry has: `3.3.9`, `3.4.3`, `3.4.4`, `3.5.0`, `3.7.2`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.7.2`","`3.3.9`","`3.4.3`","`3.4.4`"],"answer":0,"explanation":"`3.7.2` is the highest version matching `^3.4.3`."},{"prompt":"`package.json` has `\"some-lib\": \"3.3.4\"`. The registry has: `3.2.9`, `3.3.4`, `3.3.7`, `3.4.0`, `3.6.1`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.3.7`","`3.4.0`","`3.3.4`","`3.2.9`"],"answer":2,"explanation":"`3.3.4` is the highest version matching `3.3.4`."},{"prompt":"`package.json` has `\"some-lib\": \"~0.4.3\"`. The registry has: `0.3.9`, `0.4.3`, `0.4.5`, `0.5.0`, `0.6.0`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.4.5`","`0.4.3`","`0.3.9`","`0.5.0`"],"answer":0,"explanation":"`0.4.5` is the highest version matching `~0.4.3`."}]
---
# Deploy Drill: Which version does npm install? #16

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
