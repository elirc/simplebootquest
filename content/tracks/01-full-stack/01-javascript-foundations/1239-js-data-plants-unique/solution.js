export function distinctLights(plants) {
  return [...new Set(plants.map((x) => x.light))].sort();
}
