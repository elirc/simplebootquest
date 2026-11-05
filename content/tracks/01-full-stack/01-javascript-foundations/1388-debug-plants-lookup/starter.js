export function waterEveryDaysOf(plants, name) {
  const found = plants.find((x) => x.name !== name);
  return found ? found.waterEveryDays : null;
}
