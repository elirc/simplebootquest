import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { useAuth } from './auth';
import { Layout } from './components/Layout';
import { Spinner } from './components/Spinner';
import { HomePage } from './pages/Home';
import { LoginPage, RegisterPage } from './pages/Auth';
import { LearnPage } from './pages/Learn';
import { ChapterPage } from './pages/Chapter';
import { ProfilePage } from './pages/Profile';
import { LeaderboardPage } from './pages/Leaderboard';
import { NotFoundPage } from './pages/NotFound';

// The quest page pulls in the code editor, so it's split into its own bundle.
const QuestPage = lazy(() => import('./pages/Quest'));

function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <Spinner label="Checking your session…" />;
  if (!user) return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  return <>{children}</>;
}

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="learn" element={<LearnPage />} />
        <Route path="learn/:chapterSlug" element={<ChapterPage />} />
        <Route
          path="learn/:chapterSlug/:questSlug"
          element={
            <Suspense fallback={<Spinner label="Loading quest…" />}>
              <QuestPage />
            </Suspense>
          }
        />
        <Route
          path="profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route path="leaderboard" element={<LeaderboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
