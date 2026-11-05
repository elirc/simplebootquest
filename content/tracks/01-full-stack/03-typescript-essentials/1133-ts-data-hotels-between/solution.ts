interface Hotel {
  id: number;
  name: string;
  nightlyPrice: number;
  stars: number;
  city: "Lisbon" | "Kyoto" | "Toronto";
  breakfast: boolean;
}

export function hotelsInRange(hotels: Hotel[], low: number, high: number): string[] {
  return hotels.filter((x) => x.stars >= low && x.stars <= high).map((x) => x.name);
}
