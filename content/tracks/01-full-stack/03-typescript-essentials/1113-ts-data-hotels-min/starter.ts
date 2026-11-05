interface Hotel {
  id: number;
  name: string;
  nightlyPrice: number;
  stars: number;
  city: "Lisbon" | "Kyoto" | "Toronto";
  breakfast: boolean;
}

export function lowestNightlyPrice(hotels: Hotel[]): string | null {
  // TODO
  return 0 as any;
}
