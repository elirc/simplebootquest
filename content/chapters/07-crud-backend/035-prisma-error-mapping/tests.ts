const prismaError = (code, meta) => Object.assign(new Error(`Prisma ${code} with internal details`), { code, meta });

test('unique violations become 409', () => {
  expect(toHttpError(prismaError('P2002', { target: ['email'] }))).toEqual({ status: 409, body: { error: 'Already exists', fields: ['email'] } });
  expect(toHttpError(prismaError('P2002', { target: 'User_email_key' })).body.fields).toEqual(['User_email_key']);
});

test('not found and foreign keys', () => {
  expect(toHttpError(prismaError('P2025'))).toEqual({ status: 404, body: { error: 'Not found' } });
  expect(toHttpError(prismaError('P2003')).status).toBe(400);
});

test('app errors pass through', () => {
  expect(toHttpError(Object.assign(new Error('Title is required'), { status: 400 }))).toEqual({ status: 400, body: { error: 'Title is required' } });
});

test('unknown errors are hidden', () => {
  expect(toHttpError(new Error('connection to 10.0.0.5 refused'))).toEqual({ status: 500, body: { error: 'Internal Server Error' } });
  expect(toHttpError(prismaError('P1001'))).toEqual({ status: 500, body: { error: 'Internal Server Error' } });
  expect(toHttpError('a string')).toEqual({ status: 500, body: { error: 'Internal Server Error' } });
});
