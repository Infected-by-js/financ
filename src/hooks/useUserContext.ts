import { useContext } from 'react';
import { UserContext } from '@/core/providers/UserProvider';

export const useUserContext = () => useContext(UserContext);
