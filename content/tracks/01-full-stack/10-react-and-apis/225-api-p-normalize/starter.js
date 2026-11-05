function normalize(list) {
  return { byId: {}, ids: [] };
}
function upsertMany(state, list) {
  return state;
}
function removeOne(state, id) {
  return state;
}
function selectAll(state) {
  return Object.values(state.byId);
}
