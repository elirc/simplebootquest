interface Flight {
  id: number;
  number: string;
  durationMin: number;
  delayMin: number;
  seats: number;
  airline: "oneworld" | "skyteam" | "star";
}

export function flightsInRange(flights: Flight[], low: number, high: number): string[] {
  // TODO
  return [] as any;
}
