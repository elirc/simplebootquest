type Viewer = { id: number; role: 'admin' | 'member' } | null;

export function serializeUser(user: any, viewer: Viewer) {
  const out: Record<string, unknown> = { id: user.id, name: user.name, joinedAt: user.createdAt.toISOString() };
  const isAdmin = viewer?.role === 'admin';
  if (isAdmin || viewer?.id === user.id) out.email = user.email;
  if (isAdmin) {
    out.role = user.role;
    out.lastLoginAt = user.lastLoginAt ? user.lastLoginAt.toISOString() : null;
  }
  return out;
}

export function serializePost(post: any, viewer: Viewer) {
  const canSeeDraft = viewer?.role === 'admin' || viewer?.id === post.author.id;
  if (!post.published && !canSeeDraft) return null;
  return {
    id: post.id,
    title: post.title,
    body: post.body,
    author: serializeUser(post.author, viewer),
    commentCount: post.comments.length,
  };
}
