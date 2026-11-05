function can(user, action, post) {
  const isAuthor = !!user && user.id === post.authorId;
  const isStaff = !!user && (user.role === 'admin' || user.role === 'editor');
  const isAdmin = !!user && user.role === 'admin';
  const isDraft = post.status === 'draft';
  switch (action) {
    case 'read':
      return post.status === 'published' || isAuthor || isStaff;
    case 'update':
      return isStaff || (isAuthor && isDraft);
    case 'publish':
      return isStaff && isDraft;
    case 'delete':
      return isAdmin || (isAuthor && isDraft);
    default:
      return false;
  }
}
