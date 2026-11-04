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

export class NotFoundError extends Error {
  constructor() {
    super('Note not found');
    this.name = 'NotFoundError';
  }
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

const MAX_NOTES = 3;

export function createNoteService(repo: NoteRepository) {
  async function getOwned(userId: number, id: number): Promise<Note> {
    const note = await repo.findById(id);
    if (!note || note.ownerId !== userId) throw new NotFoundError();
    return note;
  }

  function cleanTitle(title: unknown): string {
    const trimmed = typeof title === 'string' ? title.trim() : '';
    if (!trimmed) throw new ValidationError('Title is required');
    return trimmed;
  }

  return {
    list(userId: number) {
      return repo.findByOwner(userId);
    },
    get: getOwned,
    async create(userId: number, input: { title?: string; body?: string }) {
      const title = cleanTitle(input.title);
      if ((await repo.countByOwner(userId)) >= MAX_NOTES) throw new ValidationError('Note limit reached');
      return repo.create({ ownerId: userId, title, body: input.body ?? '' });
    },
    async update(userId: number, id: number, input: { title?: string; body?: string }) {
      await getOwned(userId, id);
      const data: { title?: string; body?: string } = {};
      if (input.title !== undefined) data.title = cleanTitle(input.title);
      if (input.body !== undefined) data.body = input.body;
      return repo.update(id, data);
    },
    async remove(userId: number, id: number) {
      await getOwned(userId, id);
      await repo.delete(id);
    },
  };
}
