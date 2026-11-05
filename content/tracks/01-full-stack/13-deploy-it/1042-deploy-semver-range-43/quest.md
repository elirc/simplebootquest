---
slug: "deploy-semver-range-43"
title: "Deploy Drill: Which version does npm install? #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"~0.1.0\"`. The registry has: `0.0.9`, `0.1.0`, `0.1.3`, `0.2.0`, `0.4.1`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.0.9`","`0.2.0`","`0.1.0`","`0.1.3`"],"answer":3,"explanation":"`0.1.3` is the highest version matching `~0.1.0`."},{"prompt":"`package.json` has `\"some-lib\": \"1.5.0\"`. The registry has: `1.4.9`, `1.5.0`, `1.5.3`, `1.6.0`, `1.7.1`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.4.9`","`1.5.0`","`1.6.0`","`1.5.3`"],"answer":1,"explanation":"`1.5.0` is the highest version matching `1.5.0`."},{"prompt":"`package.json` has `\"some-lib\": \"~0.4.2\"`. The registry has: `0.3.9`, `0.4.2`, `0.4.3`, `0.5.0`, `0.6.0`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.3.9`","`0.5.0`","`0.4.3`","`0.4.2`"],"answer":2,"explanation":"`0.4.3` is the highest version matching `~0.4.2`."},{"prompt":"`package.json` has `\"some-lib\": \"~2.2.0\"`. The registry has: `2.1.9`, `2.2.0`, `2.2.2`, `2.3.0`, `2.5.1`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.2.2`","`2.3.0`","`2.1.9`","`2.2.0`"],"answer":0,"explanation":"`2.2.2` is the highest version matching `~2.2.0`."},{"prompt":"`package.json` has `\"some-lib\": \"1.4.2\"`. The registry has: `1.3.9`, `1.4.2`, `1.4.5`, `1.5.0`, `1.6.0`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.5.0`","`1.4.5`","`1.3.9`","`1.4.2`"],"answer":3,"explanation":"`1.4.2` is the highest version matching `1.4.2`."}]
---
# Deploy Drill: Which version does npm install? #43

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
