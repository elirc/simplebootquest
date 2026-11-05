const COURSES = [
  {id: 1, title: "CSS Layouts", lessons: 15, enrolled: 59, level: "advanced"},
  {id: 2, title: "GraphQL", lessons: 28, enrolled: 125, level: "intermediate"},
  {id: 3, title: "Accessibility", lessons: 39, enrolled: 2348, level: "intermediate"},
  {id: 4, title: "React Basics", lessons: 34, enrolled: 4329, level: "intermediate"},
  {id: 5, title: "Intro to SQL", lessons: 45, enrolled: 1057, level: "advanced"},
  {id: 6, title: "Node APIs", lessons: 39, enrolled: 3445, level: "beginner"},
  {id: 7, title: "Docker Intro", lessons: 47, enrolled: 3437, level: "intermediate"},
  {id: 8, title: "Testing JS", lessons: 24, enrolled: 4026, level: "beginner"}
];

test("an empty list", () => {
  expect(coursesById([])).toEqual({});
});

test("all courses", () => {
  expect(coursesById(COURSES)).toEqual({"1":"CSS Layouts","2":"GraphQL","3":"Accessibility","4":"React Basics","5":"Intro to SQL","6":"Node APIs","7":"Docker Intro","8":"Testing JS"});
});
