export function describePlants(plants) {
  return plants.map((x) => `${x.name} (${x.heightCm})`);
}
