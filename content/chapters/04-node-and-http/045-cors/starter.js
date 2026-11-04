function corsHeaders(req, config) {
  return { status: 200, headers: { 'Access-Control-Allow-Origin': '*' } };
}
