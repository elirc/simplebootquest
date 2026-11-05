---
slug: "deploy-semver-range-38"
title: "Deploy Drill: Which version does npm install? #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"2.1.1\"`. The registry has: `2.0.9`, `2.1.1`, `2.1.3`, `2.2.0`, `2.4.0`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.1.3`","`2.1.1`","`2.0.9`","`2.2.0`"],"answer":1,"explanation":"`2.1.1` is the highest version matching `2.1.1`."},{"prompt":"`package.json` has `\"some-lib\": \"3.4.0\"`. The registry has: `3.3.9`, `3.4.0`, `3.4.3`, `3.5.0`, `3.7.2`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.4.3`","`3.5.0`","`3.3.9`","`3.4.0`"],"answer":3,"explanation":"`3.4.0` is the highest version matching `3.4.0`."},{"prompt":"`package.json` has `\"some-lib\": \"0.0.4\"`. The registry has: `0.0.4`, `0.0.6`, `0.0.9`, `0.1.0`, `0.3.1`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.0.4`","`0.1.0`","`0.0.6`","`0.0.9`"],"answer":0,"explanation":"`0.0.4` is the highest version matching `0.0.4`."},{"prompt":"`package.json` has `\"some-lib\": \"^0.5.0\"`. The registry has: `0.4.9`, `0.5.0`, `0.5.1`, `0.6.0`, `0.8.1`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.5.1`","`0.5.0`","`0.4.9`","`0.6.0`"],"answer":0,"explanation":"`0.5.1` is the highest version matching `^0.5.0`."},{"prompt":"`package.json` has `\"some-lib\": \"~3.2.2\"`. The registry has: `3.1.9`, `3.2.2`, `3.2.3`, `3.3.0`, `3.5.1`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.1.9`","`3.3.0`","`3.2.2`","`3.2.3`"],"answer":3,"explanation":"`3.2.3` is the highest version matching `~3.2.2`."}]
---
# Deploy Drill: Which version does npm install? #38

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
