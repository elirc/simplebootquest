interface Flight {
  id: number;
  number: string;
  durationMin: number;
  delayMin: number;
  seats: number;
  airline: "oneworld" | "skyteam" | "star";
}

export function lowestDelayMin(flights: Flight[]): string | null {
  // TODO
  return 0 as any;
}
