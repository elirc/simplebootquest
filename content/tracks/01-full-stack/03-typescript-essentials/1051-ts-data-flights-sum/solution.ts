interface Flight {
  id: number;
  number: string;
  durationMin: number;
  delayMin: number;
  seats: number;
  airline: "oneworld" | "skyteam" | "star";
}

export function totalSeats(flights: Flight[]): number {
  return flights.reduce((sum, x) => sum + x.seats, 0);
}
