interface Plant {
  id: number;
  name: string;
  waterEveryDays: number;
  heightCm: number;
  light: "low" | "medium" | "bright";
  petSafe: boolean;
}

export function percentPetSafe(plants: Plant[]): number {
  // TODO
  return 0 as any;
}
