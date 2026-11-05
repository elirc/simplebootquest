interface Hotel {
  id: number;
  name: string;
  nightlyPrice: number;
  stars: number;
  city: "Lisbon" | "Kyoto" | "Toronto";
  breakfast: boolean;
}

export function lowestNightlyPrice(hotels: Hotel[]): string | null {
  let best = null;
  for (const x of hotels) if (best === null || x.nightlyPrice < best.nightlyPrice) best = x;
  return best ? best.name : null;
}
