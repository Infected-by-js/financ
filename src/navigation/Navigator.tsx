import { useEffect, useState } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomMenu from '@/components/BottomMenu';
import { screens } from './screens';

const Stack = createNativeStackNavigator();

const Navigator = () => {
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

  return (
    <NavigationContainer ref={navRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Main"
      >
        {screens.map((screen) => (
          <Stack.Screen name={screen.name} component={screen.component} key={screen.name} />
        ))}
      </Stack.Navigator>
      {currentRoute && <BottomMenu currentRoute={currentRoute} changeRoute={navRef.navigate} />}
    </NavigationContainer>
  );
};

export default Navigator;
