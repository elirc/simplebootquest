function validator(source, schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req[source]);
    if (!result.success) {
      return res.status(400).json({
        error: 'Validation failed',
        issues: result.error.issues.map((i) => ({ path: i.path.join('.'), message: i.message })),
      });
    }
    req[source] = result.data;
    next();
  };
}

const validateBody = (schema) => validator('body', schema);
const validateQuery = (schema) => validator('query', schema);
