interface Hotel {
  id: number;
  name: string;
  nightlyPrice: number;
  stars: number;
  city: "Lisbon" | "Kyoto" | "Toronto";
  breakfast: boolean;
}

export function averageStars(hotels: Hotel[]): number | null {
  if (hotels.length === 0) return null;
  const total = hotels.reduce((sum, x) => sum + x.stars, 0);
  return Math.round((total / hotels.length) * 10) / 10;
}
