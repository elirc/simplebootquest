async function loadDashboard(api) {
  const [user, stats, notifications] = await Promise.all([api.user(), api.stats(), api.notifications()]);
  return { user, stats, notifications };
}

async function sendAll(messages, send) {
  const results = await Promise.allSettled(messages.map((m) => send(m)));
  const failed = messages.filter((_, i) => results[i].status === 'rejected');
  return { sent: messages.length - failed.length, failed };
}

async function fastestMirror(urls, fetchFn) {
  try {
    return await Promise.any(urls.map((u) => fetchFn(u)));
  } catch {
    throw new Error('All mirrors failed');
  }
}
