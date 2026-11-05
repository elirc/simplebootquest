interface Plant {
  id: number;
  name: string;
  waterEveryDays: number;
  heightCm: number;
  light: "low" | "medium" | "bright";
  petSafe: boolean;
}

export function lowestWaterEveryDays(plants: Plant[]): string | null {
  let best = null;
  for (const x of plants) if (best === null || x.waterEveryDays < best.waterEveryDays) best = x;
  return best ? best.name : null;
}
