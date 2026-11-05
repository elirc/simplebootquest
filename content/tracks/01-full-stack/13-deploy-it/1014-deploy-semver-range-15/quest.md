---
slug: "deploy-semver-range-15"
title: "Deploy Drill: Which version does npm install? #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"~3.0.3\"`. The registry has: `3.0.3`, `3.0.6`, `3.0.9`, `3.1.0`, `3.2.1`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.0.9`","`3.1.0`","`3.0.3`","`3.0.6`"],"answer":0,"explanation":"`3.0.9` is the highest version matching `~3.0.3`."},{"prompt":"`package.json` has `\"some-lib\": \"^3.3.3\"`. The registry has: `3.2.9`, `3.3.3`, `3.3.4`, `3.4.0`, `3.5.2`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.3.4`","`3.3.3`","`3.2.9`","`3.5.2`"],"answer":3,"explanation":"`3.5.2` is the highest version matching `^3.3.3`."},{"prompt":"`package.json` has `\"some-lib\": \"0.3.0\"`. The registry has: `0.2.9`, `0.3.0`, `0.3.1`, `0.4.0`, `0.6.2`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.4.0`","`0.2.9`","`0.3.0`","`0.3.1`"],"answer":2,"explanation":"`0.3.0` is the highest version matching `0.3.0`."},{"prompt":"`package.json` has `\"some-lib\": \"^0.2.3\"`. The registry has: `0.1.9`, `0.2.3`, `0.2.6`, `0.3.0`, `0.4.2`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.1.9`","`0.3.0`","`0.2.3`","`0.2.6`"],"answer":3,"explanation":"`0.2.6` is the highest version matching `^0.2.3`."},{"prompt":"`package.json` has `\"some-lib\": \"0.0.0\"`. The registry has: `0.0.0`, `0.0.2`, `0.0.9`, `0.1.0`, `0.3.1`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.0.0`","`0.0.9`","`0.1.0`","`0.0.2`"],"answer":0,"explanation":"`0.0.0` is the highest version matching `0.0.0`."}]
---
# Deploy Drill: Which version does npm install? #15

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
