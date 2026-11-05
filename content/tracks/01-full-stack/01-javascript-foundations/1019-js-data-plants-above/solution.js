export function plantsAbove(plants, min) {
  return plants.filter((x) => x.heightCm > min).map((x) => x.name);
}
