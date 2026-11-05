interface Plant {
  id: number;
  name: string;
  waterEveryDays: number;
  heightCm: number;
  light: "low" | "medium" | "bright";
  petSafe: boolean;
}

export function summarisePlants(plants: Plant[]): { id: number; name: string; heightCm: number }[] {
  return plants.map(({ id, name, heightCm }) => ({ id, name, heightCm }));
}
