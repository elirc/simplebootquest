function Greeting({ name = 'stranger' }) {
  return <h1 className="greeting">Hello, {name}!</h1>;
}

function Card({ title, footer, children }) {
  return (
    <section className="card">
      <h2>{title}</h2>
      {children}
      {footer && <footer>{footer}</footer>}
    </section>
  );
}

function UserBadge({ user }) {
  return (
    <Card title={user.name} footer={user.isAdmin ? 'Admin' : undefined}>
      <p>{user.email}</p>
    </Card>
  );
}
