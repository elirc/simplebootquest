interface Plant {
  id: number;
  name: string;
  waterEveryDays: number;
  heightCm: number;
  light: "low" | "medium" | "bright";
  petSafe: boolean;
}

export function highestHeightCm(plants: Plant[]): string | null {
  // TODO
  return 0 as any;
}
