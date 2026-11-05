interface Hotel {
  id: number;
  name: string;
  nightlyPrice: number;
  stars: number;
  city: "Lisbon" | "Kyoto" | "Toronto";
  breakfast: boolean;
}

export function percentBreakfast(hotels: Hotel[]): number {
  if (hotels.length === 0) return 0;
  return Math.round((hotels.filter((x) => x.breakfast).length / hotels.length) * 100);
}
