function validateTicketUpdate(input) {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) return { ok: false, errors: [{ field: '_', message: 'must be an object' }] };
  const errors = [];
  if (input.subject !== undefined && (typeof input.subject !== 'string' || input.subject.trim() === '' || input.subject.length > 40)) errors.push({ field: 'subject', message: 'must be 1-40 characters' });
  if (input.ageHours !== undefined && (typeof input.ageHours !== 'number' || Number.isNaN(input.ageHours) || input.ageHours < 1 || input.ageHours > 200)) errors.push({ field: 'ageHours', message: 'must be a number from 1 to 200' });
  if (input.replies !== undefined && (typeof input.replies !== 'number' || Number.isNaN(input.replies) || input.replies < 0 || input.replies > 12)) errors.push({ field: 'replies', message: 'must be a number from 0 to 12' });
  if (input.priority !== undefined && !["low","normal","urgent"].includes(input.priority)) errors.push({ field: 'priority', message: 'must be one of low, normal, urgent' });
  if (input.channel !== undefined && !["email","chat","phone"].includes(input.channel)) errors.push({ field: 'channel', message: 'must be one of email, chat, phone' });
  if (input.resolved !== undefined && typeof input.resolved !== 'boolean') errors.push({ field: 'resolved', message: 'must be true or false' });
  if (errors.length) return { ok: false, errors };
  // Only known fields pass through (no mass assignment).
  const data = {};
  for (const key of ["subject","ageHours","replies","priority","channel","resolved"]) if (input[key] !== undefined) data[key] = key === 'subject' ? input[key].trim() : input[key];
  return { ok: true, data };
}
