interface Hotel {
  id: number;
  name: string;
  nightlyPrice: number;
  stars: number;
  city: "Lisbon" | "Kyoto" | "Toronto";
  breakfast: boolean;
}

export function countHotelsByCity(hotels: Hotel[], value: string): number {
  let count = 0;
  for (const x of hotels) if (x.city === value) count++;
  return count;
}
