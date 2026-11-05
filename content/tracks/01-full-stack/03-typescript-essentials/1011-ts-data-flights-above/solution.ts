interface Flight {
  id: number;
  number: string;
  durationMin: number;
  delayMin: number;
  seats: number;
  airline: "oneworld" | "skyteam" | "star";
}

export function flightsAbove(flights: Flight[], min: number): string[] {
  return flights.filter((x) => x.delayMin > min).map((x) => x.number);
}
