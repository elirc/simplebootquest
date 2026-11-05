---
slug: "deploy-semver-range-7"
title: "Deploy Drill: Which version does npm install? #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"0.2.1\"`. The registry has: `0.1.9`, `0.2.1`, `0.2.4`, `0.3.0`, `0.5.0`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.3.0`","`0.2.4`","`0.1.9`","`0.2.1`"],"answer":3,"explanation":"`0.2.1` is the highest version matching `0.2.1`."},{"prompt":"`package.json` has `\"some-lib\": \"~1.2.0\"`. The registry has: `1.1.9`, `1.2.0`, `1.2.1`, `1.3.0`, `1.4.2`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.2.1`","`1.1.9`","`1.2.0`","`1.3.0`"],"answer":0,"explanation":"`1.2.1` is the highest version matching `~1.2.0`."},{"prompt":"`package.json` has `\"some-lib\": \"~2.0.2\"`. The registry has: `2.0.2`, `2.0.5`, `2.0.9`, `2.1.0`, `2.2.2`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.0.2`","`2.0.9`","`2.1.0`","`2.0.5`"],"answer":1,"explanation":"`2.0.9` is the highest version matching `~2.0.2`."},{"prompt":"`package.json` has `\"some-lib\": \"2.2.1\"`. The registry has: `2.1.9`, `2.2.1`, `2.2.4`, `2.3.0`, `2.5.1`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.1.9`","`2.2.1`","`2.3.0`","`2.2.4`"],"answer":1,"explanation":"`2.2.1` is the highest version matching `2.2.1`."},{"prompt":"`package.json` has `\"some-lib\": \"1.5.4\"`. The registry has: `1.4.9`, `1.5.4`, `1.5.5`, `1.6.0`, `1.8.1`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.5.4`","`1.5.5`","`1.6.0`","`1.4.9`"],"answer":0,"explanation":"`1.5.4` is the highest version matching `1.5.4`."}]
---
# Deploy Drill: Which version does npm install? #7

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
