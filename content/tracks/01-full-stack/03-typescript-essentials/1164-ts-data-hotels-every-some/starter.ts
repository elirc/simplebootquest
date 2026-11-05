interface Hotel {
  id: number;
  name: string;
  nightlyPrice: number;
  stars: number;
  city: "Lisbon" | "Kyoto" | "Toronto";
  breakfast: boolean;
}

export function allHotelsUnder(hotels: Hotel[], limit: number): boolean {
  // TODO
  return 0 as any;
}
