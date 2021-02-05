import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../_services/api';

interface Person {
  id: string;
  name: string;
  email: string;
  status: boolean;
  privacy: boolean;
  avatar?: string;
  avatar_url?: string;
  address_id_main?: string;
  phone_id_man?: string;
}
interface IGroup {
  id: string;
  name: string;
  description: string;
}
interface User {
  id: string;
  is_verified: boolean;
  user_groups: IGroup[];
  person: Person;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Movie:token');
    const user = localStorage.getItem('@Movie:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const res = await api.post('sessions', { email, password });

    const { token, user } = res.data;

    localStorage.setItem('@Movie:token', token);
    localStorage.setItem('@Movie:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Movie:token');
    localStorage.removeItem('@Movie:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@Movie:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth mus be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
