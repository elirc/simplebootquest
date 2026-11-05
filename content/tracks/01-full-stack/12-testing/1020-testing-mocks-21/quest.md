---
slug: "testing-mocks-21"
title: "Testing Drill: Mock function calls #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadCourse = vi.fn((id) => id * 2);\nloadCourse.mockReturnValueOnce(94);\nconst results = [2, 4].map((id) => loadCourse(id));\n```\n\nAfter this runs, how many times was `loadCourse` called?","options":["3","2","4","1"],"answer":1},{"prompt":"```js\nconst loadCity = vi.fn((id) => id * 2);\nloadCity.mockReturnValueOnce(23);\nconst results = [2, 2, 4, 5].map((id) => loadCity(id));\n```\n\nAfter this runs, does `expect(loadCity).toHaveBeenCalledWith(5)` pass?","options":["No: it compares return values","No: it only checks the first call","Yes","No: it needs toHaveBeenLastCalledWith"],"answer":2},{"prompt":"```js\nconst loadRepo = vi.fn((id) => id * 2);\nloadRepo.mockReturnValueOnce(58);\nconst results = [5, 5, 1].map((id) => loadRepo(id));\n```\n\nAfter this runs, does `expect(loadRepo).toHaveBeenCalledWith(1)` pass?","options":["No: it needs toHaveBeenLastCalledWith","No: it compares return values","Yes","No: it only checks the first call"],"answer":2},{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(56);\nconst results = [1, 5].map((id) => loadSong(id));\n```\n\nAfter this runs, what is `loadSong.mock.calls[1]`?","options":["`[1,5]`","`[5]`","`5`","`[1]`"],"answer":1},{"prompt":"```js\nconst loadCar = vi.fn((id) => id * 2);\nloadCar.mockReturnValueOnce(34);\nconst results = [3, 1, 4].map((id) => loadCar(id));\n```\n\nAfter this runs, how many times was `loadCar` called?","options":["4","5","3","2"],"answer":2}]
---
# Testing Drill: Mock function calls #21

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.
