interface Flight {
  id: number;
  number: string;
  durationMin: number;
  delayMin: number;
  seats: number;
  airline: "oneworld" | "skyteam" | "star";
}

export function summariseFlights(flights: Flight[]): { id: number; number: string; delayMin: number }[] {
  return flights.map(({ id, number, delayMin }) => ({ id, number, delayMin }));
}
