type Role = 'admin' | 'editor' | 'member';
interface User { id: number; role: Role }
interface Post { authorId: number; status: 'draft' | 'published' }

export function can(user: User | null, action: string, post: Post): boolean {
  // TODO
  return true;
}
