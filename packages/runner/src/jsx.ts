/**
 * A tiny JSX runtime so React-style components can be tested without a DOM.
 * `h` builds plain element objects; `render` calls function components until
 * only host elements ("div", "li", ...) and text remain.
 */
export const Fragment = Symbol.for('sbq.fragment');

export type Child = VElement | string | number | boolean | null | undefined | Child[];
export interface VElement {
  $$typeof: 'sbq.element';
  type: string | symbol | ((props: Record<string, unknown>) => Child);
  key: string | number | null;
  props: Record<string, unknown> & { children?: Child[] };
}

export type RenderedNode = string | RenderedElement;
export interface RenderedElement {
  type: string;
  props: Record<string, unknown>;
  children: RenderedNode[];
}

function flatten(children: Child[]): Child[] {
  const out: Child[] = [];
  for (const child of children) {
    if (Array.isArray(child)) out.push(...flatten(child));
    else if (child !== null && child !== undefined && typeof child !== 'boolean') out.push(child);
  }
  return out;
}

export function h(type: VElement['type'], props: Record<string, unknown> | null, ...children: Child[]): VElement {
  const { key = null, ...rest } = props ?? {};
  const flat = flatten(children);
  return {
    $$typeof: 'sbq.element',
    type,
    key: key as VElement['key'],
    props: flat.length > 0 ? { ...rest, children: flat } : rest,
  };
}

export function isElement(value: unknown): value is VElement {
  return typeof value === 'object' && value !== null && (value as VElement).$$typeof === 'sbq.element';
}

/** Render a tree to host elements and strings. Always returns an array of top-level nodes. */
export function renderAll(node: Child, depth = 0): RenderedNode[] {
  if (depth > 200) throw new Error('Component tree is too deep (infinite recursion?)');
  if (node === null || node === undefined || typeof node === 'boolean') return [];
  if (Array.isArray(node)) return node.flatMap((n) => renderAll(n, depth + 1));
  if (typeof node === 'string' || typeof node === 'number') return [String(node)];
  if (!isElement(node)) throw new Error(`Objects are not valid as a child (found ${JSON.stringify(node)})`);

  const { type, props } = node;
  if (type === Fragment) return renderAll(props.children ?? [], depth + 1);
  if (typeof type === 'function') return renderAll(type(props), depth + 1);
  if (typeof type !== 'string') throw new Error('Unknown element type');

  const { children = [], ...rest } = props;
  return [{ type, props: rest, children: renderAll(children, depth + 1) }];
}

/** Render to a single node. Throws if the tree renders to nothing or many roots. */
export function render(node: Child): RenderedElement | string {
  const nodes = renderAll(node);
  if (nodes.length !== 1) throw new Error(`Expected exactly one root element but got ${nodes.length}`);
  return nodes[0]!;
}

/** The concatenated text content of a rendered node (like DOM textContent). */
export function text(node: RenderedNode | RenderedNode[] | Child): string {
  if (Array.isArray(node)) return node.map((n) => text(n as RenderedNode)).join('');
  if (node === null || node === undefined || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (isElement(node)) return text(renderAll(node));
  return (node as RenderedElement).children.map((c) => text(c)).join('');
}

/** Find every rendered element with the given tag name (or matching a predicate). */
export function findAll(
  node: RenderedNode | RenderedNode[] | Child,
  match: string | ((el: RenderedElement) => boolean),
): RenderedElement[] {
  const roots: RenderedNode[] = Array.isArray(node)
    ? (node as RenderedNode[])
    : isElement(node) || typeof node !== 'object' || node === null
      ? renderAll(node as Child)
      : [node as RenderedElement];
  const pred = typeof match === 'string' ? (el: RenderedElement) => el.type === match : match;
  const out: RenderedElement[] = [];
  const walk = (n: RenderedNode) => {
    if (typeof n === 'string') return;
    if (pred(n)) out.push(n);
    n.children.forEach(walk);
  };
  roots.forEach(walk);
  return out;
}

export function find(node: RenderedNode | RenderedNode[] | Child, match: string | ((el: RenderedElement) => boolean)): RenderedElement | undefined {
  return findAll(node, match)[0];
}
