export function splitHotelsByBreakfast(hotels) {
  const yes = [];
  const no = [];
  for (const x of hotels) (x.breakfast ? yes : no).push(x.name);
  return { yes, no };
}
