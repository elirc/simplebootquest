---
slug: auth-boss-add-auth
title: "Project: Add Authentication"
type: project
xp: 150
boss: true
requirements:
  - "A `User` model with a unique email and a bcrypt (or argon2) `passwordHash` — never store or return plaintext passwords"
  - "POST /api/auth/register validates input (Zod), checks password rules, and returns 409 if the email is taken"
  - "POST /api/auth/login returns the same generic error for an unknown email and a wrong password"
  - "The session token (JWT or session id) is stored in an httpOnly, SameSite=Lax cookie (Secure in production)"
  - "GET /api/auth/me returns the current user, and POST /api/auth/logout clears the cookie"
  - "A `requireAuth` middleware attaches `req.user`, or responds 401"
  - "Every resource is owned by a user, and every query is scoped to the owner (other users' records return 404)"
  - "Login and register are rate-limited; `helmet` sets security headers"
  - "Tests cover registering, logging in, accessing a protected route without a cookie (401), and accessing another user's record (404)"
---
# Project: Add Authentication

Make your Chapter 7 API multi-user and secure.

## Suggested packages

```bash
npm install bcryptjs jsonwebtoken cookie-parser helmet express-rate-limit
npm install -D @types/jsonwebtoken @types/cookie-parser
```

## Sketch

```ts
// POST /api/auth/login
const user = await prisma.user.findUnique({ where: { email } });
const ok = user && (await bcrypt.compare(password, user.passwordHash));
if (!ok) throw new HttpError(401, 'Invalid email or password');

const token = jwt.sign({ sub: user.id }, env.JWT_SECRET, { expiresIn: '7d' });
res.cookie('token', token, { httpOnly: true, sameSite: 'lax', secure: env.NODE_ENV === 'production', maxAge: 7 * 864e5 });
res.json(toPublicUser(user));
```

```ts
// middleware/requireAuth.ts
export const requireAuth: RequestHandler = (req, res, next) => {
  try {
    const { sub } = jwt.verify(req.cookies.token, env.JWT_SECRET) as { sub: number };
    req.user = { id: sub };
    next();
  } catch {
    res.status(401).json({ error: 'Not authenticated' });
  }
};
```

## Don't forget

- A `toPublicUser()` function that picks safe fields, so you never accidentally `res.json(user)` with the hash in it.
- Timing: running `bcrypt.compare` even when the user doesn't exist makes responses take the same time either way.
- Testing with cookies in Supertest: use `request.agent(app)`, which keeps cookies between requests.

Submit your repository URL when you're done.
