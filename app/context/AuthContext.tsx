// contexts/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { router } from 'expo-router';
import Toast from 'react-native-toast-message';
// import { useSocket } from './WebSocketContext';

interface UserData {
  id?: string;
  username?: string;
  email?: string;
  // Add other fields that come from your API
  [key: string]: any; // For any additional fields
}

interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  userData: UserData | null; 
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  // const { isConnected, socket, connect } = useSocket();

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://io.wi360.net:16900/api/auth', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password: password }),
      });

      const data = await response.json();

      if (response.ok && response.status === 200) {
        setIsAuthenticated(true);
        setUserData(data)
        // if (isConnected) {
        //   console.log('Socket connected with ID:', socket?.id);
        //   connect();
        // }
        Toast.show({ type: 'success', text1: '', text2: data.message || 'Login Successfully'});
        router.replace('/(tabs)');
      } else {
        setError(data.message || 'Invalid credentials');
        Toast.show({ type: 'error', text1: 'Error', text2: data.message || 'Invalid credentials'});
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Network error';
      setError(errorMessage);
      console.error('Login error:', error);
      Toast.show({ type: 'error', text1: 'Error', text2: 'Network error. Please check your connection.'});
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    Toast.show({ type: 'success', text1: 'Logout', text2: 'Logout Successfully !!'});
    router.replace('/signin');
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated, 
        loading, 
        error, 
        login, 
        logout,
        userData
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}