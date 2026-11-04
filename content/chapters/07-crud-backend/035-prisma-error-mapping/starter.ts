export function toHttpError(err: unknown) {
  return { status: 500, body: { error: String(err) } };
}
