export function percentPetSafe(plants) {
  if (plants.length === 0) return 0;
  return Math.round((plants.filter((x) => x.petSafe).length / plants.length) * 100);
}
