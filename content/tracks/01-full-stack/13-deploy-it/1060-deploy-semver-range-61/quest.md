---
slug: "deploy-semver-range-61"
title: "Deploy Drill: Which version does npm install? #61"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"~3.0.1\"`. The registry has: `3.0.1`, `3.0.4`, `3.0.9`, `3.1.0`, `3.3.0`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.0.4`","`3.1.0`","`3.0.1`","`3.0.9`"],"answer":3,"explanation":"`3.0.9` is the highest version matching `~3.0.1`."},{"prompt":"`package.json` has `\"some-lib\": \"0.2.2\"`. The registry has: `0.1.9`, `0.2.2`, `0.2.5`, `0.3.0`, `0.4.0`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.3.0`","`0.2.2`","`0.1.9`","`0.2.5`"],"answer":1,"explanation":"`0.2.2` is the highest version matching `0.2.2`."},{"prompt":"`package.json` has `\"some-lib\": \"^1.1.3\"`. The registry has: `1.0.9`, `1.1.3`, `1.1.6`, `1.2.0`, `1.4.0`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.1.3`","`1.0.9`","`1.4.0`","`1.1.6`"],"answer":2,"explanation":"`1.4.0` is the highest version matching `^1.1.3`."},{"prompt":"`package.json` has `\"some-lib\": \"~2.1.1\"`. The registry has: `2.0.9`, `2.1.1`, `2.1.4`, `2.2.0`, `2.3.0`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.0.9`","`2.1.1`","`2.1.4`","`2.2.0`"],"answer":2,"explanation":"`2.1.4` is the highest version matching `~2.1.1`."},{"prompt":"`package.json` has `\"some-lib\": \"~2.1.0\"`. The registry has: `2.0.9`, `2.1.0`, `2.1.2`, `2.2.0`, `2.4.2`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.1.0`","`2.0.9`","`2.2.0`","`2.1.2`"],"answer":3,"explanation":"`2.1.2` is the highest version matching `~2.1.0`."}]
---
# Deploy Drill: Which version does npm install? #61

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
