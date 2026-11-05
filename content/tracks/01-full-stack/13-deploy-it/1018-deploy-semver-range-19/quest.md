---
slug: "deploy-semver-range-19"
title: "Deploy Drill: Which version does npm install? #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"~3.4.1\"`. The registry has: `3.3.9`, `3.4.1`, `3.4.3`, `3.5.0`, `3.6.2`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.4.3`","`3.5.0`","`3.4.1`","`3.3.9`"],"answer":0,"explanation":"`3.4.3` is the highest version matching `~3.4.1`."},{"prompt":"`package.json` has `\"some-lib\": \"3.3.2\"`. The registry has: `3.2.9`, `3.3.2`, `3.3.3`, `3.4.0`, `3.6.2`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.3.3`","`3.3.2`","`3.4.0`","`3.2.9`"],"answer":1,"explanation":"`3.3.2` is the highest version matching `3.3.2`."},{"prompt":"`package.json` has `\"some-lib\": \"~2.0.2\"`. The registry has: `2.0.2`, `2.0.4`, `2.0.9`, `2.1.0`, `2.2.0`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.0.9`","`2.0.2`","`2.1.0`","`2.0.4`"],"answer":0,"explanation":"`2.0.9` is the highest version matching `~2.0.2`."},{"prompt":"`package.json` has `\"some-lib\": \"^3.0.3\"`. The registry has: `3.0.3`, `3.0.5`, `3.0.9`, `3.1.0`, `3.2.1`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.0.5`","`3.0.9`","`3.2.1`","`3.0.3`"],"answer":2,"explanation":"`3.2.1` is the highest version matching `^3.0.3`."},{"prompt":"`package.json` has `\"some-lib\": \"~3.1.2\"`. The registry has: `3.0.9`, `3.1.2`, `3.1.3`, `3.2.0`, `3.4.1`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.2.0`","`3.1.2`","`3.0.9`","`3.1.3`"],"answer":3,"explanation":"`3.1.3` is the highest version matching `~3.1.2`."}]
---
# Deploy Drill: Which version does npm install? #19

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.
