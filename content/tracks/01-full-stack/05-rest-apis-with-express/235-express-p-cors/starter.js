function cors({ origins, methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], credentials = false }) {
  return (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    next();
  };
}
