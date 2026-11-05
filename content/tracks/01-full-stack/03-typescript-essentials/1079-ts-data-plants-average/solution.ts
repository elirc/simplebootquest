interface Plant {
  id: number;
  name: string;
  waterEveryDays: number;
  heightCm: number;
  light: "low" | "medium" | "bright";
  petSafe: boolean;
}

export function averageHeightCm(plants: Plant[]): number | null {
  if (plants.length === 0) return null;
  const total = plants.reduce((sum, x) => sum + x.heightCm, 0);
  return Math.round((total / plants.length) * 10) / 10;
}
