interface Plant {
  id: number;
  name: string;
  waterEveryDays: number;
  heightCm: number;
  light: "low" | "medium" | "bright";
  petSafe: boolean;
}

export function highestHeightCm(plants: Plant[]): string | null {
  let best = null;
  for (const x of plants) if (best === null || x.heightCm > best.heightCm) best = x;
  return best ? best.name : null;
}
