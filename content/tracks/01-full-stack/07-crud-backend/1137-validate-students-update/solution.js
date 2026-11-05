function validateStudentUpdate(input) {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) return { ok: false, errors: [{ field: '_', message: 'must be an object' }] };
  const errors = [];
  if (input.name !== undefined && (typeof input.name !== 'string' || input.name.trim() === '' || input.name.length > 40)) errors.push({ field: 'name', message: 'must be 1-40 characters' });
  if (input.score !== undefined && (typeof input.score !== 'number' || Number.isNaN(input.score) || input.score < 31 || input.score > 100)) errors.push({ field: 'score', message: 'must be a number from 31 to 100' });
  if (input.age !== undefined && (typeof input.age !== 'number' || Number.isNaN(input.age) || input.age < 17 || input.age > 34)) errors.push({ field: 'age', message: 'must be a number from 17 to 34' });
  if (input.course !== undefined && !["web","data","design"].includes(input.course)) errors.push({ field: 'course', message: 'must be one of web, data, design' });
  if (input.graduated !== undefined && typeof input.graduated !== 'boolean') errors.push({ field: 'graduated', message: 'must be true or false' });
  if (errors.length) return { ok: false, errors };
  // Only known fields pass through (no mass assignment).
  const data = {};
  for (const key of ["name","score","age","course","graduated"]) if (input[key] !== undefined) data[key] = key === 'name' ? input[key].trim() : input[key];
  return { ok: true, data };
}
