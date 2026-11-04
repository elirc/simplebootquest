function postCount(userId, api) {
  return api
    .getUser(userId)
    .then((user) => api.getPosts(user.id))
    .then((posts) => posts.length);
}

function safePostCount(userId, api) {
  return postCount(userId, api).catch(() => 0);
}

function withFallback(promise, fallbackValue) {
  return promise.catch(() => fallbackValue);
}
