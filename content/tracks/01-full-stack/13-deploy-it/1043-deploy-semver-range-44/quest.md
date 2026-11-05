---
slug: "deploy-semver-range-44"
title: "Deploy Drill: Which version does npm install? #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"~0.3.0\"`. The registry has: `0.2.9`, `0.3.0`, `0.3.3`, `0.4.0`, `0.6.2`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.3.0`","`0.2.9`","`0.3.3`","`0.4.0`"],"answer":2,"explanation":"`0.3.3` is the highest version matching `~0.3.0`."},{"prompt":"`package.json` has `\"some-lib\": \"3.0.1\"`. The registry has: `3.0.1`, `3.0.4`, `3.0.9`, `3.1.0`, `3.3.1`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.1.0`","`3.0.4`","`3.0.1`","`3.0.9`"],"answer":2,"explanation":"`3.0.1` is the highest version matching `3.0.1`."},{"prompt":"`package.json` has `\"some-lib\": \"^0.1.4\"`. The registry has: `0.0.9`, `0.1.4`, `0.1.6`, `0.2.0`, `0.4.2`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.1.6`","`0.0.9`","`0.2.0`","`0.1.4`"],"answer":0,"explanation":"`0.1.6` is the highest version matching `^0.1.4`."},{"prompt":"`package.json` has `\"some-lib\": \"^0.3.4\"`. The registry has: `0.2.9`, `0.3.4`, `0.3.7`, `0.4.0`, `0.5.0`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.3.4`","`0.2.9`","`0.3.7`","`0.4.0`"],"answer":2,"explanation":"`0.3.7` is the highest version matching `^0.3.4`."},{"prompt":"`package.json` has `\"some-lib\": \"~3.5.1\"`. The registry has: `3.4.9`, `3.5.1`, `3.5.4`, `3.6.0`, `3.7.0`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.5.4`","`3.5.1`","`3.4.9`","`3.6.0`"],"answer":0,"explanation":"`3.5.4` is the highest version matching `~3.5.1`."}]
---
# Deploy Drill: Which version does npm install? #44

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
