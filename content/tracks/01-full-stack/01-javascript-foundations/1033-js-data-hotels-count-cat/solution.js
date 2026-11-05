export function countHotelsByCity(hotels, value) {
  let count = 0;
  for (const x of hotels) if (x.city === value) count++;
  return count;
}
