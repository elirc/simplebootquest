test('error classes', () => {
  const nf = new NotFoundError('Todo');
  expect(nf).toBeInstanceOf(AppError);
  expect(nf).toBeInstanceOf(Error);
  expect(nf.name).toBe('NotFoundError');
  expect(nf.status).toBe(404);
  expect(nf.message).toBe('Todo not found');
  expect(new AuthError().status).toBe(401);
  expect(new AppError('x').status).toBe(500);
});

test('toResponse', () => {
  expect(toResponse(new NotFoundError('User'))).toEqual({ status: 404, body: { error: 'User not found' } });
  expect(toResponse(new ValidationError({ email: 'is invalid' }))).toEqual({ status: 400, body: { error: 'Validation failed', fields: { email: 'is invalid' } } });
  expect(toResponse(new TypeError('secret internals'))).toEqual({ status: 500, body: { error: 'Internal Server Error' } });
});

test('supports cause', () => {
  const root = new Error('ECONNREFUSED');
  const err = new AppError('Could not save', 503, { cause: root });
  expect(err.cause).toBe(root);
});
