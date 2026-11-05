export function heightCmOf(plants, name) {
  const found = plants.find((x) => x.name === name);
  return found ? found.heightCm : null;
}
