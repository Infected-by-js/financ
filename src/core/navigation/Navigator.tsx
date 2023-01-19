import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useUserContext } from '@/hooks';
import { BottomMenu } from '@/shared/components/organisms';
import { useBottomMenuNavigation } from './hooks';
import * as Screens from '@/screens';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const { user, isInitLoading } = useUserContext();
  const { navRef, currentRoute } = useBottomMenuNavigation();

  const getInitialRouteName = useCallback(() => {
    if (!user) return 'Login';

    return user?.passwordShort ? 'EntranceWithCode' : 'Entrance';
  }, [user]);

  return (
    // TODO: Swipe to lazy load
    <NavigationContainer ref={navRef}>
      {isInitLoading ? (
        <Screens.SplashScreen />
      ) : (
        <>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={getInitialRouteName()}
          >
            {user ? (
              <>
                <Stack.Screen name="EntranceWithCode" component={Screens.EntranceWithCodeScreen} />
                <Stack.Screen name="Entrance" component={Screens.EntranceScreen} />
                <Stack.Screen name="Home" component={Screens.HomeScreen} />
                <Stack.Screen name="History" component={Screens.HistoryScreen} />
                <Stack.Screen name="Settings" component={Screens.SettingsScreen} />
                <Stack.Screen name="Operation" component={Screens.OperationScreen} />
              </>
            ) : (
              <>
                <Stack.Screen name="Login" component={Screens.LoginScreen} />
                <Stack.Screen name="SignUp" component={Screens.SignUpScreen} />
              </>
            )}
          </Stack.Navigator>

          {user && currentRoute && (
            <BottomMenu currentRoute={currentRoute} changeRoute={navRef.navigate} />
          )}
        </>
      )}
    </NavigationContainer>
  );
};

export default Navigator;
