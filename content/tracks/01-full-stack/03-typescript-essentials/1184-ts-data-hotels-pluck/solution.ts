interface Hotel {
  id: number;
  name: string;
  nightlyPrice: number;
  stars: number;
  city: "Lisbon" | "Kyoto" | "Toronto";
  breakfast: boolean;
}

export function summariseHotels(hotels: Hotel[]): { id: number; name: string; stars: number }[] {
  return hotels.map(({ id, name, stars }) => ({ id, name, stars }));
}
