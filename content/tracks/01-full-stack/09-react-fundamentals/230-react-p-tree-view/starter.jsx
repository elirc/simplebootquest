function Tree({ nodes, expanded, onToggle }) {
  return <ul role="tree">{nodes.map((n) => <li role="treeitem">{n.name}</li>)}</ul>;
}
