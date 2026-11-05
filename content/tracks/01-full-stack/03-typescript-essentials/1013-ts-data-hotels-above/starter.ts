interface Hotel {
  id: number;
  name: string;
  nightlyPrice: number;
  stars: number;
  city: "Lisbon" | "Kyoto" | "Toronto";
  breakfast: boolean;
}

export function hotelsAbove(hotels: Hotel[], min: number): string[] {
  // TODO
  return [] as any;
}
