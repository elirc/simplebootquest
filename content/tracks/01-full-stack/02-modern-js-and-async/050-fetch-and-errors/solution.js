class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
  }
}

async function getJSON(url, fetchFn) {
  const res = await fetchFn(url);
  if (!res.ok) {
    throw new HttpError(res.status, `Request to ${url} failed with ${res.status}`);
  }
  return res.json();
}

function safeParseJSON(text) {
  try {
    return { ok: true, value: JSON.parse(text) };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}
