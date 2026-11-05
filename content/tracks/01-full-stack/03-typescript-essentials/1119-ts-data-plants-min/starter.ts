interface Plant {
  id: number;
  name: string;
  waterEveryDays: number;
  heightCm: number;
  light: "low" | "medium" | "bright";
  petSafe: boolean;
}

export function lowestWaterEveryDays(plants: Plant[]): string | null {
  // TODO
  return 0 as any;
}
