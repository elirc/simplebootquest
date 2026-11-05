function validateEmployeeUpdate(input) {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) return { ok: false, errors: [{ field: '_', message: 'must be an object' }] };
  const errors = [];
  if (input.name !== undefined && (typeof input.name !== 'string' || input.name.trim() === '' || input.name.length > 40)) errors.push({ field: 'name', message: 'must be 1-40 characters' });
  if (input.salary !== undefined && (typeof input.salary !== 'number' || Number.isNaN(input.salary) || input.salary < 42000 || input.salary > 160000)) errors.push({ field: 'salary', message: 'must be a number from 42000 to 160000' });
  if (input.yearsAtCompany !== undefined && (typeof input.yearsAtCompany !== 'number' || Number.isNaN(input.yearsAtCompany) || input.yearsAtCompany < 0 || input.yearsAtCompany > 15)) errors.push({ field: 'yearsAtCompany', message: 'must be a number from 0 to 15' });
  if (input.team !== undefined && !["platform","product","data"].includes(input.team)) errors.push({ field: 'team', message: 'must be one of platform, product, data' });
  if (input.level !== undefined && !["junior","mid","senior"].includes(input.level)) errors.push({ field: 'level', message: 'must be one of junior, mid, senior' });
  if (input.remote !== undefined && typeof input.remote !== 'boolean') errors.push({ field: 'remote', message: 'must be true or false' });
  if (errors.length) return { ok: false, errors };
  // Only known fields pass through (no mass assignment).
  const data = {};
  for (const key of ["name","salary","yearsAtCompany","team","level","remote"]) if (input[key] !== undefined) data[key] = key === 'name' ? input[key].trim() : input[key];
  return { ok: true, data };
}
