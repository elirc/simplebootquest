/**
 * A small React-compatible hooks runtime for the in-browser runner.
 *
 * `mount(<App />)` renders a component tree and keeps it alive: hook state is
 * stored per component instance (identified by its position in the tree and
 * its key, like React), effects run after each render, and state updates
 * re-render the tree. It is deliberately tiny — no fibers, no concurrent
 * rendering — but it follows React's rules closely enough that code written
 * against it works unchanged in a real React app.
 *
 * Tests use it like React Testing Library:
 *
 *   const ui = mount(<Counter />);
 *   ui.click('button');
 *   expect(ui.text()).toContain('1');
 */
import { Fragment, h, isElement, renderAll, text as textOf, findAll as findAllIn, type Child, type RenderedElement, type RenderedNode, type VElement } from './jsx.js';

type Deps = readonly unknown[] | undefined;

interface StateHook { kind: 'state'; value: unknown }
interface RefHook { kind: 'ref'; value: { current: unknown } }
interface MemoHook { kind: 'memo'; value: unknown; deps: Deps }
interface EffectHook { kind: 'effect'; deps: Deps; queued: boolean; cleanup?: (() => void) | void; pending?: () => (() => void) | void }
type Hook = StateHook | RefHook | MemoHook | EffectHook;

interface Instance {
  key: string;
  hooks: Hook[];
  name: string;
}

interface Context<T> {
  $$context: true;
  defaultValue: T;
  Provider: (props: { value: T; children?: Child }) => Child;
}

interface RenderFrame {
  root: Root;
  instance: Instance;
  hookIndex: number;
  contexts: Map<Context<unknown>, unknown>;
}

let frame: RenderFrame | null = null;

function currentFrame(hook: string): RenderFrame {
  if (!frame) {
    throw new Error(`${hook}() can only be called inside a component that is rendered with mount(). Hooks must be called at the top level of a component function.`);
  }
  return frame;
}

function nextHook<H extends Hook>(hook: string, create: () => H): H {
  const f = currentFrame(hook);
  const i = f.hookIndex++;
  const existing = f.instance.hooks[i];
  if (existing) {
    if (existing.kind !== create().kind) {
      throw new Error(`Hook order changed in <${f.instance.name}>: hooks must be called in the same order on every render (no hooks inside if/loops).`);
    }
    return existing as H;
  }
  const h = create();
  f.instance.hooks[i] = h;
  return h;
}

function depsChanged(prev: Deps, next: Deps): boolean {
  if (prev === undefined || next === undefined) return true;
  if (prev.length !== next.length) return true;
  return prev.some((v, i) => !Object.is(v, next[i]));
}

export function useState<T>(initial: T | (() => T)): [T, (next: T | ((prev: T) => T)) => void] {
  const f = currentFrame('useState');
  const root = f.root;
  const hook = nextHook<StateHook>('useState', () => ({
    kind: 'state',
    value: typeof initial === 'function' ? (initial as () => T)() : initial,
  }));
  const setState = (next: T | ((prev: T) => T)) => {
    const value = typeof next === 'function' ? (next as (prev: T) => T)(hook.value as T) : next;
    if (Object.is(value, hook.value)) return;
    hook.value = value;
    root.scheduleUpdate();
  };
  return [hook.value as T, setState];
}

export function useReducer<S, A>(reducer: (state: S, action: A) => S, initialArg: S, init?: (arg: S) => S): [S, (action: A) => void] {
  const [state, setState] = useState<S>(() => (init ? init(initialArg) : initialArg));
  const dispatch = useCallback((action: A) => setState((prev) => reducer(prev, action)), [reducer]);
  return [state, dispatch];
}

export function useRef<T>(initial: T): { current: T } {
  return nextHook<RefHook>('useRef', () => ({ kind: 'ref', value: { current: initial } })).value as { current: T };
}

export function useMemo<T>(factory: () => T, deps: Deps): T {
  const hook = nextHook<MemoHook>('useMemo', () => ({ kind: 'memo', value: undefined, deps: undefined }));
  if (hook.deps === undefined || depsChanged(hook.deps, deps)) {
    hook.value = factory();
    hook.deps = deps;
  }
  return hook.value as T;
}

export function useCallback<T extends (...args: never[]) => unknown>(callback: T, deps: Deps): T {
  return useMemo(() => callback, deps);
}

export function useEffect(effect: () => (() => void) | void, deps?: Deps): void {
  const f = currentFrame('useEffect');
  const hook = nextHook<EffectHook>('useEffect', () => ({ kind: 'effect', deps: undefined, queued: false }));
  if (!hook.queued || depsChanged(hook.deps, deps)) {
    hook.queued = true;
    hook.pending = effect;
    hook.deps = deps;
    f.root.queueEffect(hook);
  }
}

/** Effects run after render in this runtime, so layout effects behave like useEffect. */
export const useLayoutEffect = useEffect;

export function useId(): string {
  const f = currentFrame('useId');
  return useMemo(() => `:r${f.root.nextId++}:`, []);
}

export function createContext<T>(defaultValue: T): Context<T> {
  const ctx = { $$context: true, defaultValue } as Context<T>;
  ctx.Provider = function Provider(props: { value: T; children?: Child }) {
    return h(Fragment, null, props.children);
  };
  (ctx.Provider as unknown as { $$provides: Context<T> }).$$provides = ctx;
  return ctx;
}

export function useContext<T>(ctx: Context<T>): T {
  const f = currentFrame('useContext');
  return (f.contexts.has(ctx as Context<unknown>) ? f.contexts.get(ctx as Context<unknown>) : ctx.defaultValue) as T;
}

const MAX_RENDERS = 50;

class Root {
  instances = new Map<string, Instance>();
  effects: EffectHook[] = [];
  dirty = false;
  scheduled = false;
  batching = 0;
  nextId = 0;
  tree: RenderedNode[] = [];
  unmounted = false;

  constructor(public element: Child) {}

  queueEffect(hook: EffectHook) {
    this.effects.push(hook);
  }

  scheduleUpdate() {
    if (this.unmounted) return;
    this.dirty = true;
    if (this.batching > 0 || this.scheduled) return;
    this.scheduled = true;
    queueMicrotask(() => {
      this.scheduled = false;
      if (this.dirty) this.flush();
    });
  }

  /** Render, then run effects, repeating while effects update state. */
  flush() {
    let renders = 0;
    do {
      if (++renders > MAX_RENDERS) {
        throw new Error('Too many re-renders. A state update inside an effect (or during render) keeps triggering another render. Check your useEffect dependencies.');
      }
      this.dirty = false;
      this.renderOnce();
      this.runEffects();
    } while (this.dirty);
  }

  private renderOnce() {
    const seen = new Set<string>();
    this.effects = [];
    this.tree = this.renderNode(this.element, 'root', new Map(), seen, 0);
    for (const [key, inst] of this.instances) {
      if (!seen.has(key)) {
        cleanupInstance(inst);
        this.instances.delete(key);
      }
    }
  }

  private renderNode(node: Child, path: string, contexts: Map<Context<unknown>, unknown>, seen: Set<string>, depth: number): RenderedNode[] {
    if (depth > 200) throw new Error('Component tree is too deep (infinite recursion?)');
    if (node === null || node === undefined || typeof node === 'boolean') return [];
    if (Array.isArray(node)) {
      return node.flatMap((child, i) => {
        const key = isElement(child) && child.key !== null ? `k${String(child.key)}` : `i${i}`;
        return this.renderNode(child, `${path}.${key}`, contexts, seen, depth + 1);
      });
    }
    if (typeof node === 'string' || typeof node === 'number') return [String(node)];
    if (!isElement(node)) throw new Error(`Objects are not valid as a React child (found ${JSON.stringify(node)})`);

    const el = node as VElement;
    const { type, props } = el;
    if (type === Fragment) return this.renderNode(props.children ?? [], `${path}.f`, contexts, seen, depth + 1);
    if (typeof type === 'function') {
      const name = type.name || 'Anonymous';
      const key = `${path}/${name}`;
      seen.add(key);
      let inst = this.instances.get(key);
      if (!inst) {
        inst = { key, hooks: [], name };
        this.instances.set(key, inst);
      }
      let childContexts = contexts;
      const provides = (type as unknown as { $$provides?: Context<unknown> }).$$provides;
      if (provides) {
        childContexts = new Map(contexts);
        childContexts.set(provides, props.value);
      }
      const prev = frame;
      frame = { root: this, instance: inst, hookIndex: 0, contexts: childContexts };
      let output: Child;
      try {
        output = (type as (p: Record<string, unknown>) => Child)(props);
      } finally {
        frame = prev;
      }
      return this.renderNode(output, key, childContexts, seen, depth + 1);
    }
    if (typeof type !== 'string') throw new Error('Unknown element type');
    const { children = [], ...rest } = props;
    return [{ type, props: rest, children: this.renderNode(children, `${path}<${type}`, contexts, seen, depth + 1) }];
  }

  private runEffects() {
    const effects = this.effects;
    this.effects = [];
    this.batching++;
    try {
      for (const hook of effects) {
        if (typeof hook.cleanup === 'function') hook.cleanup();
        const run = hook.pending;
        hook.pending = undefined;
        hook.cleanup = run ? run() : undefined;
      }
    } finally {
      this.batching--;
    }
  }

  unmount() {
    for (const inst of this.instances.values()) cleanupInstance(inst);
    this.instances.clear();
    this.tree = [];
    this.unmounted = true;
  }
}

function cleanupInstance(inst: Instance) {
  for (const hook of inst.hooks) {
    if (hook.kind === 'effect' && typeof hook.cleanup === 'function') {
      hook.cleanup();
      hook.cleanup = undefined;
    }
  }
}

type Target = string | RenderedElement | ((el: RenderedElement) => boolean);

export interface MountedUi {
  /** The single rendered root element (throws if there are several roots). */
  root(): RenderedNode;
  /** All rendered top-level nodes. */
  nodes(): RenderedNode[];
  /** The visible text of everything rendered. */
  text(): string;
  find(match: string | ((el: RenderedElement) => boolean)): RenderedElement | undefined;
  findAll(match: string | ((el: RenderedElement) => boolean)): RenderedElement[];
  /** Find an element whose text content equals (or matches) the given text. */
  getByText(match: string | RegExp): RenderedElement;
  /** Calls the element's onClick handler and re-renders. */
  click(target: Target): void;
  /** Calls the input's onChange handler with { target: { value } } and re-renders. */
  type(target: Target, value: string): void;
  /** Calls the form's onSubmit handler and re-renders. */
  submit(target?: Target): void;
  /** Run a function, then apply any state updates it caused. Await it for async work. */
  act<T>(fn: () => T): T;
  rerender(element: Child): void;
  unmount(): void;
}

let activeRoots: Root[] = [];

function applyUpdates(root: Root) {
  if (root.dirty && !root.unmounted) root.flush();
}

/** Mount a component tree and keep it alive for interaction. */
export function mount(element: Child): MountedUi {
  const root = new Root(element);
  activeRoots.push(root);
  root.batching++;
  try {
    root.flush();
  } finally {
    root.batching--;
  }
  applyUpdates(root);

  const all = () => root.tree;
  const resolve = (target: Target): RenderedElement => {
    if (typeof target === 'object') return target;
    const found = findAllIn(all(), target)[0];
    if (!found) throw new Error(`Could not find an element matching ${typeof target === 'string' ? `<${target}>` : 'the predicate'}`);
    return found;
  };
  const act = <T>(fn: () => T): T => {
    root.batching++;
    let result: T;
    try {
      result = fn();
    } finally {
      root.batching--;
    }
    // Updates made synchronously in the handler (before its first await) are
    // applied right away, like React does at the end of an event.
    applyUpdates(root);
    if (result instanceof Promise) {
      return result.then(async (v) => {
        await settle();
        return v;
      }) as T;
    }
    return result;
  };
  const event = (el: RenderedElement, extra: Record<string, unknown> = {}) => ({
    preventDefault() {},
    stopPropagation() {},
    target: { ...el.props, ...extra },
    currentTarget: { ...el.props, ...extra },
    ...extra,
  });
  const call = (el: RenderedElement, prop: string, arg: unknown) => {
    const handler = el.props[prop];
    if (typeof handler !== 'function') throw new Error(`<${el.type}> has no ${prop} handler`);
    return act(() => (handler as (e: unknown) => unknown)(arg));
  };

  const ui: MountedUi = {
    root() {
      if (root.tree.length !== 1) throw new Error(`Expected exactly one root element but got ${root.tree.length}`);
      return root.tree[0]!;
    },
    nodes: all,
    text: () => textOf(all()),
    find: (match) => findAllIn(all(), match)[0],
    findAll: (match) => findAllIn(all(), match),
    getByText(match) {
      const matches = (s: string) => (typeof match === 'string' ? s.trim() === match : match.test(s));
      const candidates = findAllIn(all(), (el) => matches(textOf(el)));
      // Prefer the deepest element (the one closest to the text).
      const deepest = candidates.filter((c) => !candidates.some((o) => o !== c && findAllIn([c], (x) => x === o).length > 0));
      const found = deepest[0];
      if (!found) throw new Error(`Could not find an element with text ${String(match)}. Rendered text: "${textOf(all())}"`);
      return found;
    },
    click(target) {
      const el = resolve(target);
      if (el.props.disabled) return;
      call(el, 'onClick', event(el));
    },
    type(target, value) {
      const el = resolve(target);
      call(el, 'onChange', event(el, { value }));
    },
    submit(target = 'form') {
      const el = resolve(target);
      call(el, 'onSubmit', event(el));
    },
    act,
    rerender(element) {
      root.element = element;
      act(() => root.scheduleUpdate());
    },
    unmount() {
      root.unmount();
      activeRoots = activeRoots.filter((r) => r !== root);
    },
  };
  return ui;
}

/** Let pending promises and scheduled re-renders settle. */
async function settle() {
  for (let i = 0; i < 20; i++) {
    await new Promise((r) => setTimeout(r, 0));
    let any = false;
    for (const r of activeRoots) {
      if (r.dirty && !r.unmounted) {
        r.flush();
        any = true;
      }
    }
    if (!any && i > 1) return;
  }
}

/** Run a function and flush updates for every mounted tree (like React's act()). */
export function act<T>(fn: () => T | Promise<T>): T | Promise<T> {
  const result = fn();
  if (result instanceof Promise) return result.then(async (v) => (await settle(), v));
  for (const r of activeRoots) applyUpdates(r);
  return result;
}

/** Retry an assertion until it passes or the timeout elapses (like Testing Library's waitFor). */
export async function waitFor<T>(assertion: () => T, { timeout = 1000, interval = 10 } = {}): Promise<T> {
  const started = Date.now();
  let lastError: unknown;
  for (;;) {
    await settle();
    try {
      return assertion();
    } catch (err) {
      lastError = err;
    }
    if (Date.now() - started > timeout) throw lastError;
    await new Promise((r) => setTimeout(r, interval));
  }
}

/** Unmount every tree (called between quest runs). */
export function cleanupMounted() {
  for (const r of activeRoots) r.unmount();
  activeRoots = [];
}

/** What `import React from 'react'` (or `import { useState } from 'react'`) resolves to in the runner. */
export const React = Object.freeze({
  createElement: h,
  Fragment,
  useState,
  useReducer,
  useRef,
  useMemo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useContext,
  useId,
  createContext,
});

// Re-exported for type users.
export type { RenderedElement, RenderedNode };
export { renderAll };
