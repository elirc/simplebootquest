---
slug: "deploy-semver-range-4"
title: "Deploy Drill: Which version does npm install? #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"~0.2.4\"`. The registry has: `0.1.9`, `0.2.4`, `0.2.7`, `0.3.0`, `0.4.0`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.1.9`","`0.2.7`","`0.3.0`","`0.2.4`"],"answer":1,"explanation":"`0.2.7` is the highest version matching `~0.2.4`."},{"prompt":"`package.json` has `\"some-lib\": \"3.5.1\"`. The registry has: `3.4.9`, `3.5.1`, `3.5.2`, `3.6.0`, `3.8.0`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.6.0`","`3.5.2`","`3.5.1`","`3.4.9`"],"answer":2,"explanation":"`3.5.1` is the highest version matching `3.5.1`."},{"prompt":"`package.json` has `\"some-lib\": \"~3.0.3\"`. The registry has: `3.0.3`, `3.0.4`, `3.0.9`, `3.1.0`, `3.3.2`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.0.4`","`3.0.3`","`3.0.9`","`3.1.0`"],"answer":2,"explanation":"`3.0.9` is the highest version matching `~3.0.3`."},{"prompt":"`package.json` has `\"some-lib\": \"^2.1.3\"`. The registry has: `2.0.9`, `2.1.3`, `2.1.4`, `2.2.0`, `2.4.2`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.0.9`","`2.1.4`","`2.1.3`","`2.4.2`"],"answer":3,"explanation":"`2.4.2` is the highest version matching `^2.1.3`."},{"prompt":"`package.json` has `\"some-lib\": \"2.1.4\"`. The registry has: `2.0.9`, `2.1.4`, `2.1.7`, `2.2.0`, `2.4.0`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.2.0`","`2.1.4`","`2.1.7`","`2.0.9`"],"answer":1,"explanation":"`2.1.4` is the highest version matching `2.1.4`."}]
---
# Deploy Drill: Which version does npm install? #4

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
