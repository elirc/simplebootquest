interface Plant {
  id: number;
  name: string;
  waterEveryDays: number;
  heightCm: number;
  light: "low" | "medium" | "bright";
  petSafe: boolean;
}

export function plantsAbove(plants: Plant[], min: number): string[] {
  // TODO
  return [] as any;
}
