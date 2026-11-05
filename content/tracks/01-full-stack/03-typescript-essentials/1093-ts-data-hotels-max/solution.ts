interface Hotel {
  id: number;
  name: string;
  nightlyPrice: number;
  stars: number;
  city: "Lisbon" | "Kyoto" | "Toronto";
  breakfast: boolean;
}

export function highestStars(hotels: Hotel[]): string | null {
  let best = null;
  for (const x of hotels) if (best === null || x.stars > best.stars) best = x;
  return best ? best.name : null;
}
