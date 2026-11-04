function Layout({ header, sidebar, children }) {
  return (
    <div className="layout">
      <header>{header}</header>
      {sidebar && <aside>{sidebar}</aside>}
      <main>{children}</main>
    </div>
  );
}

function Modal({ title, open, onClose, children, actions }) {
  if (!open) return null;
  return (
    <div role="dialog" aria-label={title}>
      <h2>{title}</h2>
      {children}
      <footer>
        {actions}
        <button onClick={onClose}>Close</button>
      </footer>
    </div>
  );
}

function ConfirmDelete({ itemName, onConfirm, onCancel }) {
  return (
    <Modal
      open
      title={`Delete ${itemName}?`}
      onClose={onCancel}
      actions={
        <button className="danger" onClick={onConfirm}>
          Delete
        </button>
      }
    >
      <p>This cannot be undone.</p>
    </Modal>
  );
}
