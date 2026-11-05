export function summarisePlants(plants) {
  return plants.map(({ id, name, waterEveryDays }) => ({ id, name, waterEveryDays }));
}
