import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <div className="empty-state">
      <h1>404 — Quest not found</h1>
      <p className="muted">This page wandered off the map.</p>
      <Link to="/learn" className="btn btn-primary">
        Back to the curriculum
      </Link>
    </div>
  );
}
