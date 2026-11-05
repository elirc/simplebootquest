function validateProductUpdate(input) {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) return { ok: false, errors: [{ field: '_', message: 'must be an object' }] };
  const errors = [];
  if (input.name !== undefined && (typeof input.name !== 'string' || input.name.trim() === '' || input.name.length > 40)) errors.push({ field: 'name', message: 'must be 1-40 characters' });
  if (input.price !== undefined && (typeof input.price !== 'number' || Number.isNaN(input.price) || input.price < 3 || input.price > 120)) errors.push({ field: 'price', message: 'must be a number from 3 to 120' });
  if (input.stock !== undefined && (typeof input.stock !== 'number' || Number.isNaN(input.stock) || input.stock < 0 || input.stock > 60)) errors.push({ field: 'stock', message: 'must be a number from 0 to 60' });
  if (input.category !== undefined && !["office","tech","home"].includes(input.category)) errors.push({ field: 'category', message: 'must be one of office, tech, home' });
  if (input.onSale !== undefined && typeof input.onSale !== 'boolean') errors.push({ field: 'onSale', message: 'must be true or false' });
  if (errors.length) return { ok: false, errors };
  // Only known fields pass through (no mass assignment).
  const data = {};
  for (const key of ["name","price","stock","category","onSale"]) if (input[key] !== undefined) data[key] = key === 'name' ? input[key].trim() : input[key];
  return { ok: true, data };
}
