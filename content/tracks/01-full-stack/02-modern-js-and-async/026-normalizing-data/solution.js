function normalize(posts) {
  const state = { posts: { byId: {}, allIds: [] }, authors: { byId: {}, allIds: [] } };
  for (const { author, ...post } of posts) {
    state.posts.byId[post.id] = { ...post, authorId: author.id };
    state.posts.allIds.push(post.id);
    if (!state.authors.byId[author.id]) {
      state.authors.byId[author.id] = author;
      state.authors.allIds.push(author.id);
    }
  }
  return state;
}

function denormalize(state) {
  return state.posts.allIds.map((id) => {
    const { authorId, ...post } = state.posts.byId[id];
    return { ...post, author: state.authors.byId[authorId] };
  });
}

function renameAuthor(state, authorId, name) {
  return {
    ...state,
    authors: {
      ...state.authors,
      byId: { ...state.authors.byId, [authorId]: { ...state.authors.byId[authorId], name } },
    },
  };
}
