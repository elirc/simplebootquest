export function searchPlants(plants, query) {
  const q = query.trim().toLowerCase();
  return plants.filter((x) => x.name.toLowerCase().includes(q)).map((x) => x.name);
}
