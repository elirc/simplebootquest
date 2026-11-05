---
slug: "ts-q-reading-types"
title: "Quiz: Reading Types"
type: "quiz"
xp: 15
questions: [{"prompt": "`Pick<{ a: string; b: number; c: boolean }, \"a\" | \"c\">` is…", "options": ["{ b: number }", "{ a: string; c: boolean }", "\"a\" | \"c\""], "answer": 1}, {"prompt": "`ReturnType<() => Promise<User>>` is…", "options": ["User", "Promise<User>", "() => User"], "answer": 1}, {"prompt": "`Awaited<Promise<Promise<number>>>` is…", "options": ["Promise<number>", "number", "unknown"], "answer": 1}, {"prompt": "`Exclude<\"a\" | \"b\" | \"c\", \"a\">` is…", "options": ["\"a\"", "\"b\" | \"c\"", "never"], "answer": 1}, {"prompt": "`Parameters<(id: number, opts?: { force: boolean }) => void>` is…", "options": ["[number]", "[id: number, opts?: { force: boolean }]", "number"], "answer": 1}, {"prompt": "`NonNullable<string | null | undefined>` is…", "options": ["string", "string | null", "never"], "answer": 0}]
---
# Quiz: Reading Types

Reading complex types is a core skill, especially in library docs and error messages. Work through each one step by step.
