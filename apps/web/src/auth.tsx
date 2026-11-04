import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { PublicUser } from '@sbq/shared';
import { api, ApiError } from './api';

interface AuthState {
  user: PublicUser | null;
  /** True until we know whether a session cookie is valid. */
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  /** Replace the cached user (e.g. with the updated XP after completing a quest). */
  setUser: (user: PublicUser) => void;
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<PublicUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    api.auth
      .me()
      .then((res) => !ignore && setUser(res.user))
      .catch((err) => {
        if (!(err instanceof ApiError && err.status === 401)) console.error(err);
      })
      .finally(() => !ignore && setLoading(false));
    return () => {
      ignore = true;
    };
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    setUser((await api.auth.login(email, password)).user);
  }, []);
  const register = useCallback(async (name: string, email: string, password: string) => {
    setUser((await api.auth.register(name, email, password)).user);
  }, []);
  const logout = useCallback(async () => {
    await api.auth.logout();
    setUser(null);
  }, []);

  const value = useMemo(() => ({ user, loading, login, register, logout, setUser }), [user, loading, login, register, logout]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthState {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
