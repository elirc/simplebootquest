export function flightsById(flights) {
  const byId = {};
  for (const x of flights) byId[x.id] = x.number;
  return byId;
}
