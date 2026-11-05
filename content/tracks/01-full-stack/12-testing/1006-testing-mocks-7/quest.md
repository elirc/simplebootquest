---
slug: "testing-mocks-7"
title: "Testing Drill: Mock function calls #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(52);\nconst results = [3, 5, 4, 3].map((id) => loadSong(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[52,10,8,6]`","`[52,5,4,3]`","`[6,10,8,6]`","`[3,5,4,3]`"],"answer":0},{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(75);\nconst results = [2, 4, 5].map((id) => loadCar(id));\n```\n\nAfter this runs, does `expect(loadCar).toHaveBeenCalledWith(5)` pass?","options":["No: it needs toHaveBeenLastCalledWith","Yes","No: it only checks the first call","No: it compares return values"],"answer":1},{"prompt":"```js\nconst loadTicket = vi.fn((id) => id * 2);\nloadTicket.mockReturnValueOnce(70);\nconst results = [5, 4, 5, 5].map((id) => loadTicket(id));\n```\n\nAfter this runs, what is `loadTicket.mock.calls[1]`?","options":["`4`","`[4]`","`[5]`","`[5,4]`"],"answer":1},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(29);\nconst results = [1, 1].map((id) => loadEvent(id));\n```\n\nAfter this runs, does `expect(loadEvent).toHaveBeenCalledWith(1)` pass?","options":["No: it only checks the first call","Yes","No: it compares return values","No: it needs toHaveBeenLastCalledWith"],"answer":1},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(97);\nconst results = [4, 1].map((id) => loadRecipe(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[97,1]`","`[4,1]`","`[8,2]`","`[97,2]`"],"answer":3}]
---
# Testing Drill: Mock function calls #7

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
