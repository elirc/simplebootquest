type Role = 'admin' | 'editor' | 'member';
interface User { id: number; role: Role }
interface Post { authorId: number; status: 'draft' | 'published' }

export function can(user: User | null, action: string, post: Post): boolean {
  if (action === 'read' && post.status === 'published') return true;
  if (!user) return false;

  const isAuthor = user.id === post.authorId;
  const isAdmin = user.role === 'admin';
  const isEditor = user.role === 'editor';

  switch (action) {
    case 'read':
    case 'update':
      return isAuthor || isEditor || isAdmin;
    case 'delete':
      return isAuthor || isAdmin;
    case 'publish':
      return isEditor || isAdmin;
    default:
      return false;
  }
}
