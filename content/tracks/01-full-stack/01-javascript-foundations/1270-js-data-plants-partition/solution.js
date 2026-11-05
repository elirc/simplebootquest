export function splitPlantsByPetSafe(plants) {
  const yes = [];
  const no = [];
  for (const x of plants) (x.petSafe ? yes : no).push(x.name);
  return { yes, no };
}
