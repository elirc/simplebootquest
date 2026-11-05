interface Hotel {
  id: number;
  name: string;
  nightlyPrice: number;
  stars: number;
  city: "Lisbon" | "Kyoto" | "Toronto";
  breakfast: boolean;
}

export function totalStars(hotels: Hotel[]): number {
  return hotels.reduce((sum, x) => sum + x.stars, 0);
}
