interface Plant {
  id: number;
  name: string;
  waterEveryDays: number;
  heightCm: number;
  light: "low" | "medium" | "bright";
  petSafe: boolean;
}

export function totalWaterEveryDays(plants: Plant[]): number {
  return plants.reduce((sum, x) => sum + x.waterEveryDays, 0);
}
