import { FC, ReactNode, createContext, useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import { register } from '@/shared/api';
import * as Storage from '@/shared/libs/persistenceStorage';
import { User } from '@/shared/types/models';

type UserState = User | null;

interface Context {
  user: UserState;
  isLoading: boolean;
  isInitLoading: boolean;
  register: (user: Omit<User, '_id'>) => void;
}

interface Props {
  children: ReactNode;
}

export const AuthContext = createContext({} as Context);

const AuthProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<UserState>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitLoading, setIsInitLoading] = useState(true);

  const handleRegister = async (user: Omit<User, '_id'>) => {
    try {
      setIsLoading(true);

      const savedUser = await register(user);

      Storage.setItem('user', savedUser);
      setUser(savedUser);
    } catch (error: any) {
      console.log(error);
      Alert.alert('Ошибка при регистрации, попробуй позже');
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    Storage.getItem<User>('user').then((savedUser) => {
      setUser(savedUser);
      setIsInitLoading(false);
    });
  }, []);

  const handleLogin = () => {};

  const handleLogout = () => {
    Storage.removeItem('user');
  };
  handleLogout();

  const value = useMemo(
    () => ({
      user,
      isLoading,
      isInitLoading,
      register: handleRegister,
    }),
    [user, isLoading, isInitLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
