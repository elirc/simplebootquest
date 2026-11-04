interface Note {
  id: number;
  ownerId: number;
  title: string;
  body: string;
}

interface NoteRepository {
  findById(id: number): Promise<Note | null>;
  findByOwner(ownerId: number): Promise<Note[]>;
  create(data: Omit<Note, 'id'>): Promise<Note>;
  update(id: number, data: Partial<Omit<Note, 'id' | 'ownerId'>>): Promise<Note>;
  delete(id: number): Promise<void>;
  countByOwner(ownerId: number): Promise<number>;
}

export class NotFoundError extends Error {}
export class ValidationError extends Error {}

export function createNoteService(repo: NoteRepository) {
  return {
    async list(userId: number) {},
    async get(userId: number, id: number) {},
    async create(userId: number, input: { title?: string; body?: string }) {},
    async update(userId: number, id: number, input: { title?: string; body?: string }) {},
    async remove(userId: number, id: number) {},
  };
}
