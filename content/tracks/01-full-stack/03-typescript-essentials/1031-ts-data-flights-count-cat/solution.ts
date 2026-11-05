interface Flight {
  id: number;
  number: string;
  durationMin: number;
  delayMin: number;
  seats: number;
  airline: "oneworld" | "skyteam" | "star";
}

export function countFlightsByAirline(flights: Flight[], value: string): number {
  let count = 0;
  for (const x of flights) if (x.airline === value) count++;
  return count;
}
