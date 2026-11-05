interface Flight {
  id: number;
  number: string;
  durationMin: number;
  delayMin: number;
  seats: number;
  airline: "oneworld" | "skyteam" | "star";
}

export function highestSeats(flights: Flight[]): string | null {
  let best = null;
  for (const x of flights) if (best === null || x.seats > best.seats) best = x;
  return best ? best.number : null;
}
