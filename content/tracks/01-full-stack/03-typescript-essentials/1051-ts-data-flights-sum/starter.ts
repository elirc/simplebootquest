interface Flight {
  id: number;
  number: string;
  durationMin: number;
  delayMin: number;
  seats: number;
  airline: "oneworld" | "skyteam" | "star";
}

export function totalSeats(flights: Flight[]): number {
  // TODO
  return 0 as any;
}
