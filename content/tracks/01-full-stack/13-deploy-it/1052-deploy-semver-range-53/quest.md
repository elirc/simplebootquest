---
slug: "deploy-semver-range-53"
title: "Deploy Drill: Which version does npm install? #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"~2.2.3\"`. The registry has: `2.1.9`, `2.2.3`, `2.2.6`, `2.3.0`, `2.5.0`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.2.6`","`2.1.9`","`2.2.3`","`2.3.0`"],"answer":0,"explanation":"`2.2.6` is the highest version matching `~2.2.3`."},{"prompt":"`package.json` has `\"some-lib\": \"0.4.3\"`. The registry has: `0.3.9`, `0.4.3`, `0.4.5`, `0.5.0`, `0.6.2`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.4.5`","`0.3.9`","`0.5.0`","`0.4.3`"],"answer":3,"explanation":"`0.4.3` is the highest version matching `0.4.3`."},{"prompt":"`package.json` has `\"some-lib\": \"3.5.3\"`. The registry has: `3.4.9`, `3.5.3`, `3.5.5`, `3.6.0`, `3.8.1`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.5.3`","`3.6.0`","`3.5.5`","`3.4.9`"],"answer":0,"explanation":"`3.5.3` is the highest version matching `3.5.3`."},{"prompt":"`package.json` has `\"some-lib\": \"~1.0.2\"`. The registry has: `1.0.2`, `1.0.5`, `1.0.9`, `1.1.0`, `1.3.1`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.0.9`","`1.0.5`","`1.1.0`","`1.0.2`"],"answer":0,"explanation":"`1.0.9` is the highest version matching `~1.0.2`."},{"prompt":"`package.json` has `\"some-lib\": \"~3.4.3\"`. The registry has: `3.3.9`, `3.4.3`, `3.4.6`, `3.5.0`, `3.6.1`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.5.0`","`3.3.9`","`3.4.3`","`3.4.6`"],"answer":3,"explanation":"`3.4.6` is the highest version matching `~3.4.3`."}]
---
# Deploy Drill: Which version does npm install? #53

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
