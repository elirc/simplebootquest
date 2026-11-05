interface Plant {
  id: number;
  name: string;
  waterEveryDays: number;
  heightCm: number;
  light: "low" | "medium" | "bright";
  petSafe: boolean;
}

export function allPlantsUnder(plants: Plant[], limit: number): boolean {
  return plants.every((x) => x.waterEveryDays < limit);
}
