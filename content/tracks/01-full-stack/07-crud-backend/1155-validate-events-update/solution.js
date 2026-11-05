function validateEventUpdate(input) {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) return { ok: false, errors: [{ field: '_', message: 'must be an object' }] };
  const errors = [];
  if (input.name !== undefined && (typeof input.name !== 'string' || input.name.trim() === '' || input.name.length > 40)) errors.push({ field: 'name', message: 'must be 1-40 characters' });
  if (input.capacity !== undefined && (typeof input.capacity !== 'number' || Number.isNaN(input.capacity) || input.capacity < 20 || input.capacity > 400)) errors.push({ field: 'capacity', message: 'must be a number from 20 to 400' });
  if (input.registered !== undefined && (typeof input.registered !== 'number' || Number.isNaN(input.registered) || input.registered < 0 || input.registered > 380)) errors.push({ field: 'registered', message: 'must be a number from 0 to 380' });
  if (input.format !== undefined && !["in-person","online","hybrid"].includes(input.format)) errors.push({ field: 'format', message: 'must be one of in-person, online, hybrid' });
  if (input.free !== undefined && typeof input.free !== 'boolean') errors.push({ field: 'free', message: 'must be true or false' });
  if (errors.length) return { ok: false, errors };
  // Only known fields pass through (no mass assignment).
  const data = {};
  for (const key of ["name","capacity","registered","format","free"]) if (input[key] !== undefined) data[key] = key === 'name' ? input[key].trim() : input[key];
  return { ok: true, data };
}
