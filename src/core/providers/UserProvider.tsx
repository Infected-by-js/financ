import { FC, ReactNode, createContext, useEffect, useMemo, useState } from 'react';
import { FirebaseService, StorageService } from '@/services';
import { User } from '@/types/models';

interface Context {
  user: User | null;
  isLoading: boolean;
  isInitLoading: boolean;
  register: (user: Omit<User, '_id'>) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

interface Props {
  children: ReactNode;
}

export const UserContext = createContext({} as Context);

const UserProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitLoading, setIsInitLoading] = useState(true);

  const handleRegister = async (user: Omit<User, '_id'>) => {
    try {
      setIsLoading(true);

      const savedUser = await FirebaseService.register(user);

      StorageService.setItem('user', savedUser);
      setUser(savedUser);
    } catch (error: any) {
      setUser(null);

      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      setIsLoading(true);

      const savedUser = await FirebaseService.login(email, password);

      StorageService.setItem('user', savedUser);
      setUser(savedUser);
    } catch (error: any) {
      setUser(null);

      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setIsLoading(true);

      await FirebaseService.logout();
      await StorageService.removeItem('user');
      await StorageService.removeItem('theme');

      setUser(null);
    } catch (error: any) {
      setUser(null);

      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    StorageService.getItem<User>('user')
      .then((savedUser) => {
        setUser(savedUser);
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => {
        setIsInitLoading(false);
      });
  }, []);

  const value = useMemo(
    () => ({
      user,
      isLoading,
      isInitLoading,
      register: handleRegister,
      login: handleLogin,
      logout: handleLogout,
    }),
    [user, isLoading, isInitLoading, handleLogin, handleRegister, handleLogout]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
