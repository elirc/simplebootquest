const WORKOUTS = [
  {id: 1, label: "Tue run", minutes: 72, calories: 722, kind: "mobility"},
  {id: 2, label: "Wed lift", minutes: 82, calories: 169, kind: "cardio"},
  {id: 3, label: "Fri run", minutes: 97, calories: 479, kind: "mobility"},
  {id: 4, label: "Mon run", minutes: 31, calories: 299, kind: "cardio"},
  {id: 5, label: "Sat ride", minutes: 116, calories: 195, kind: "cardio"},
  {id: 6, label: "Tue swim", minutes: 46, calories: 238, kind: "strength"},
  {id: 7, label: "Mon lift", minutes: 68, calories: 401, kind: "mobility"},
  {id: 8, label: "Wed swim", minutes: 113, calories: 402, kind: "mobility"}
];

function pageOfWorkouts(workouts, page, size) {
  const totalPages = Math.ceil(workouts.length / size);
  const items = workouts.slice((page - 1) * size, page * size).map((x) => x.label);
  return { items, page, totalPages };
}
