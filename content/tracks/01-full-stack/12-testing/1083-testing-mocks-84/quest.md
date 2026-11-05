---
slug: "testing-mocks-84"
title: "Testing Drill: Mock function calls #84"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(53);\nconst results = [5, 3, 4].map((id) => loadEvent(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[10,6,8]`","`[53,6,8]`","`[53,3,4]`","`[5,3,4]`"],"answer":1},{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(91);\nconst results = [4, 3].map((id) => loadRepo(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[91,6]`","`[91,3]`","`[8,6]`","`[4,3]`"],"answer":0},{"prompt":"```js\nconst loadMovie = vi.fn((id) => id * 2);\nloadMovie.mockReturnValueOnce(14);\nconst results = [1, 2, 1, 5].map((id) => loadMovie(id));\n```\n\nAfter this runs, does `expect(loadMovie).toHaveBeenCalledWith(5)` pass?","options":["No: it compares return values","No: it needs toHaveBeenLastCalledWith","Yes","No: it only checks the first call"],"answer":2},{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(44);\nconst results = [4, 4].map((id) => loadSong(id));\n```\n\nAfter this runs, what is `loadSong.mock.calls[1]`?","options":["`4`","`[4,4]`","`[4]`"],"answer":2},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(96);\nconst results = [2, 5, 4, 2].map((id) => loadFlight(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[4,10,8,4]`","`[2,5,4,2]`","`[96,5,4,2]`","`[96,10,8,4]`"],"answer":3}]
---
# Testing Drill: Mock function calls #84

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
