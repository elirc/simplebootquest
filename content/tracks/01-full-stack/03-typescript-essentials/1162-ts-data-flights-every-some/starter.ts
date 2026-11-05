interface Flight {
  id: number;
  number: string;
  durationMin: number;
  delayMin: number;
  seats: number;
  airline: "oneworld" | "skyteam" | "star";
}

export function allFlightsUnder(flights: Flight[], limit: number): boolean {
  // TODO
  return 0 as any;
}
