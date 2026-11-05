export function plantsInRange(plants, low, high) {
  return plants.filter((x) => x.heightCm >= low && x.heightCm <= high).map((x) => x.name);
}
