interface Plant {
  id: number;
  name: string;
  waterEveryDays: number;
  heightCm: number;
  light: "low" | "medium" | "bright";
  petSafe: boolean;
}

export function plantsInRange(plants: Plant[], low: number, high: number): string[] {
  // TODO
  return [] as any;
}
