export function countPlantsByLight(plants, value) {
  let count = 0;
  for (const x of plants) if (x.light === value) count++;
  return count;
}
