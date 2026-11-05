interface Hotel {
  id: number;
  name: string;
  nightlyPrice: number;
  stars: number;
  city: "Lisbon" | "Kyoto" | "Toronto";
  breakfast: boolean;
}

export function allHotelsUnder(hotels: Hotel[], limit: number): boolean {
  return hotels.every((x) => x.stars < limit);
}
