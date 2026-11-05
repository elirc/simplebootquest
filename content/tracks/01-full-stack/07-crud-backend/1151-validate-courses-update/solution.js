function validateCourseUpdate(input) {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) return { ok: false, errors: [{ field: '_', message: 'must be an object' }] };
  const errors = [];
  if (input.title !== undefined && (typeof input.title !== 'string' || input.title.trim() === '' || input.title.length > 40)) errors.push({ field: 'title', message: 'must be 1-40 characters' });
  if (input.lessons !== undefined && (typeof input.lessons !== 'number' || Number.isNaN(input.lessons) || input.lessons < 6 || input.lessons > 48)) errors.push({ field: 'lessons', message: 'must be a number from 6 to 48' });
  if (input.enrolled !== undefined && (typeof input.enrolled !== 'number' || Number.isNaN(input.enrolled) || input.enrolled < 12 || input.enrolled > 4800)) errors.push({ field: 'enrolled', message: 'must be a number from 12 to 4800' });
  if (input.level !== undefined && !["beginner","intermediate","advanced"].includes(input.level)) errors.push({ field: 'level', message: 'must be one of beginner, intermediate, advanced' });
  if (errors.length) return { ok: false, errors };
  // Only known fields pass through (no mass assignment).
  const data = {};
  for (const key of ["title","lessons","enrolled","level"]) if (input[key] !== undefined) data[key] = key === 'title' ? input[key].trim() : input[key];
  return { ok: true, data };
}
