function normalize(list) {
  return upsertMany({ byId: {}, ids: [] }, list);
}

function upsertMany(state, list) {
  const byId = { ...state.byId };
  const ids = [...state.ids];
  for (const item of list) {
    if (item.id in byId) {
      byId[item.id] = { ...byId[item.id], ...item };
    } else {
      byId[item.id] = item;
      ids.push(item.id);
    }
  }
  return { byId, ids };
}

function removeOne(state, id) {
  if (!(id in state.byId)) return state;
  const { [id]: _removed, ...byId } = state.byId;
  return { byId, ids: state.ids.filter((x) => x !== id) };
}

function selectAll(state) {
  return state.ids.map((id) => state.byId[id]);
}
