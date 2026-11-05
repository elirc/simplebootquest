interface Flight {
  id: number;
  number: string;
  durationMin: number;
  delayMin: number;
  seats: number;
  airline: "oneworld" | "skyteam" | "star";
}

export function lowestDelayMin(flights: Flight[]): string | null {
  let best = null;
  for (const x of flights) if (best === null || x.delayMin < best.delayMin) best = x;
  return best ? best.number : null;
}
