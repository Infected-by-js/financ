import { FC, ReactNode, createContext, useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import { User } from '@/types/models';
import { FirebaseService, StorageService } from '@/services';

interface Context {
  user: User | null;
  isLoading: boolean;
  isInitLoading: boolean;
  register: (user: Omit<User, '_id'>) => void;
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
      console.log(error);
      Alert.alert('Ошибка при регистрации, попробуй позже');
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    StorageService.getItem<User>('user').then((savedUser) => {
      setUser(savedUser);
      setIsInitLoading(false);
    });
  }, []);

  const handleLogin = () => {};

  const handleLogout = () => {
    StorageService.removeItem('user');
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

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
