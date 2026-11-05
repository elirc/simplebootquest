interface Plant {
  id: number;
  name: string;
  waterEveryDays: number;
  heightCm: number;
  light: "low" | "medium" | "bright";
  petSafe: boolean;
}

export function countPlantsByLight(plants: Plant[], value: string): number {
  let count = 0;
  for (const x of plants) if (x.light === value) count++;
  return count;
}
