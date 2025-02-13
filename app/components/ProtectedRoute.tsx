// components/ProtectedRoute.tsx
import useAuth from '../context/AuthContext';
import { router } from 'expo-router';
import { useEffect } from 'react';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const  isAuthenticated  = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/signin');
    }
  }, [isAuthenticated]);

  return isAuthenticated ? children : null;
}