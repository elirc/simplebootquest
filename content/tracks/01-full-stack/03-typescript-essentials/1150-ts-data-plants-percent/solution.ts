interface Plant {
  id: number;
  name: string;
  waterEveryDays: number;
  heightCm: number;
  light: "low" | "medium" | "bright";
  petSafe: boolean;
}

export function percentPetSafe(plants: Plant[]): number {
  if (plants.length === 0) return 0;
  return Math.round((plants.filter((x) => x.petSafe).length / plants.length) * 100);
}
