const freeze = (post) => Object.freeze({ ...post, tags: Object.freeze([...post.tags]) });

describe('addTag', () => {
  test('returns a new post with the tag added', () => {
    const post = freeze({ id: 1, title: 'Hi', tags: ['node'] });
    const next = addTag(post, 'js');
    expect(next).toEqual({ id: 1, title: 'Hi', tags: ['node', 'js'] });
    expect(next).not.toBe(post);
    expect(post.tags).toEqual(['node']);
  });

  test('normalises the tag', () => {
    expect(addTag(freeze({ id: 1, tags: [] }), '  TypeScript ').tags).toEqual(['typescript']);
  });

  test('ignores duplicates and returns the same object', () => {
    const post = freeze({ id: 1, tags: ['js'] });
    expect(addTag(post, ' JS ')).toBe(post);
  });

  test('rejects empty tags', () => {
    expect(() => addTag(freeze({ id: 1, tags: [] }), '   ')).toThrow('Tag cannot be empty');
  });
});
