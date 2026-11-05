interface Flight {
  id: number;
  number: string;
  durationMin: number;
  delayMin: number;
  seats: number;
  airline: "oneworld" | "skyteam" | "star";
}

export function averageSeats(flights: Flight[]): number | null {
  // TODO
  return 0 as any;
}
