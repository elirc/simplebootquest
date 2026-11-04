function sleep(ms, signal) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createSearcher(searchFn) {
  return (query) => searchFn(query);
}
