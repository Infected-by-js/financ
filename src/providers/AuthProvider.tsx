import { Dispatch, FC, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';
import * as dummy from '@/fixtures/dummy';
import { User } from '@/fixtures/types';

type UserState = User | null;

interface Context {
  user: UserState;
  setUser: Dispatch<SetStateAction<UserState>>;
}

interface Props {
  children: ReactNode;
}

export const AuthContext = createContext({} as Context);

// SplashScreen.preventAutoHideAsync();

const AuthProvider: FC<Props> = ({ children }) => {
  const dummyUser = dummy.getUser();
  const [user, setUser] = useState<UserState>(dummyUser);

  useEffect(() => {
    // get user from async strorage
  }, []);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
