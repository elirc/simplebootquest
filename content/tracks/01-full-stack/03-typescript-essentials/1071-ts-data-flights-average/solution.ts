interface Flight {
  id: number;
  number: string;
  durationMin: number;
  delayMin: number;
  seats: number;
  airline: "oneworld" | "skyteam" | "star";
}

export function averageSeats(flights: Flight[]): number | null {
  if (flights.length === 0) return null;
  const total = flights.reduce((sum, x) => sum + x.seats, 0);
  return Math.round((total / flights.length) * 10) / 10;
}
