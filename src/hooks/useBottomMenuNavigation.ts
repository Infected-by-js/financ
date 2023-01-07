import { useEffect, useState } from 'react';
import { useNavigationContainerRef } from '@react-navigation/native';

export const useBottomMenuNavigation = () => {
  const navRef = useNavigationContainerRef();
  const [currentRoute, setCurrentRoute] = useState<string | undefined>();

  useEffect(() => {
    const routeName = () => navRef.getCurrentRoute()?.name;

    setCurrentRoute(routeName());

    const listener = navRef.addListener('state', () => {
      setCurrentRoute(routeName());
    });

    return () => navRef.removeListener('state', listener);
  }, []);

  return {
    navRef,
    currentRoute,
  };
};
