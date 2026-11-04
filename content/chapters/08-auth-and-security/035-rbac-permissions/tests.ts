const rbac = createRbac({
  viewer: { permissions: ['post:read', 'comment:read'] },
  author: { inherits: ['viewer'], permissions: ['post:write', 'comment:write'] },
  moderator: { inherits: ['viewer'], permissions: ['comment:*'] },
  admin: { inherits: ['author', 'moderator'], permissions: ['user:manage'] },
  root: { permissions: ['*'] },
});

test('permissionsFor includes inherited permissions', () => {
  expect(rbac.permissionsFor('author')).toEqual(['comment:read', 'comment:write', 'post:read', 'post:write']);
  expect(rbac.permissionsFor('admin')).toEqual(['comment:*', 'comment:read', 'comment:write', 'post:read', 'post:write', 'user:manage']);
});

test('can checks every role and wildcards', () => {
  expect(rbac.can({ roles: ['viewer'] }, 'post:write')).toBe(false);
  expect(rbac.can({ roles: ['viewer', 'author'] }, 'post:write')).toBe(true);
  expect(rbac.can({ roles: ['moderator'] }, 'comment:delete')).toBe(true);
  expect(rbac.can({ roles: ['moderator'] }, 'post:delete')).toBe(false);
  expect(rbac.can({ roles: ['root'] }, 'anything:at-all')).toBe(true);
  expect(rbac.can({ roles: [] }, 'post:read')).toBe(false);
});

test('errors', () => {
  expect(() => rbac.permissionsFor('ghost')).toThrow('Unknown role: ghost');
  const loop = createRbac({ a: { inherits: ['b'], permissions: [] }, b: { inherits: ['a'], permissions: [] } });
  expect(() => loop.permissionsFor('a')).toThrow('Circular role inheritance');
});
