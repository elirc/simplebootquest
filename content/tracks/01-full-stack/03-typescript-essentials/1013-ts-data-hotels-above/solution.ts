interface Hotel {
  id: number;
  name: string;
  nightlyPrice: number;
  stars: number;
  city: "Lisbon" | "Kyoto" | "Toronto";
  breakfast: boolean;
}

export function hotelsAbove(hotels: Hotel[], min: number): string[] {
  return hotels.filter((x) => x.stars > min).map((x) => x.name);
}
