export function countOrdersByStatus(orders, value) {
  let count = 0;
  for (const x of orders) if (x.status === value) count++;
  return count;
}
