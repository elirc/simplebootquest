interface Hotel {
  id: number;
  name: string;
  nightlyPrice: number;
  stars: number;
  city: "Lisbon" | "Kyoto" | "Toronto";
  breakfast: boolean;
}

export function hotelsInRange(hotels: Hotel[], low: number, high: number): string[] {
  // TODO
  return [] as any;
}
