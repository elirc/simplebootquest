function TreeItems({ nodes, expanded, onToggle, role }) {
  return (
    <ul role={role}>
      {nodes.map((node) => {
        const hasChildren = Array.isArray(node.children) && node.children.length > 0;
        const open = hasChildren && expanded.has(node.id);
        return (
          <li key={node.id} role="treeitem" aria-expanded={hasChildren ? open : undefined}>
            {hasChildren && (
              <button aria-label={`${open ? 'Collapse' : 'Expand'} ${node.name}`} onClick={() => onToggle(node.id)}>
                {open ? '▾' : '▸'}
              </button>
            )}
            <span>{node.name}</span>
            {open && <TreeItems nodes={node.children} expanded={expanded} onToggle={onToggle} role="group" />}
          </li>
        );
      })}
    </ul>
  );
}

function Tree({ nodes, expanded, onToggle }) {
  return <TreeItems nodes={nodes} expanded={expanded} onToggle={onToggle} role="tree" />;
}
