interface Hotel {
  id: number;
  name: string;
  nightlyPrice: number;
  stars: number;
  city: "Lisbon" | "Kyoto" | "Toronto";
  breakfast: boolean;
}

export function totalStars(hotels: Hotel[]): number {
  // TODO
  return 0 as any;
}
