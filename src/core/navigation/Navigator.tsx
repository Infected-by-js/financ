import { memo, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useUserContext } from '@/hooks';
import { BottomMenu } from '@/shared/components/organisms';
import { useBottomMenuNavigation } from './hooks';
import * as Screens from '@/screens';

const Stack = createNativeStackNavigator();

const pagesWithBottomMenu = ['Home', 'History', 'Settings'];

const Navigator = memo(() => {
  const { user, isInitLoading } = useUserContext();
  const { navRef, currentRoute } = useBottomMenuNavigation();

  const isShowMenu = useMemo(() => {
    return user && currentRoute && pagesWithBottomMenu.includes(currentRoute);
  }, [user, currentRoute]);

  return (
    // TODO: Swipe to lazy load
    <NavigationContainer ref={navRef}>
      {isInitLoading ? (
        <Screens.SplashScreen />
      ) : (
        <>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user ? (
              <>
                {user.passwordShort ? (
                  <Stack.Screen
                    name="EntranceWithCode"
                    component={Screens.EntranceWithCodeScreen}
                  />
                ) : (
                  <Stack.Screen name="Entrance" component={Screens.EntranceScreen} />
                )}
                <Stack.Screen name="Home" component={Screens.HomeScreen} />
                <Stack.Screen name="History" component={Screens.HistoryScreen} />
                <Stack.Screen name="Settings" component={Screens.SettingsScreen} />
                <Stack.Screen
                  name="Operation"
                  component={Screens.OperationScreen}
                  options={{ presentation: 'modal' }}
                />
              </>
            ) : (
              <>
                <Stack.Screen name="Login" component={Screens.LoginScreen} />
                <Stack.Screen name="SignUp" component={Screens.SignUpScreen} />
              </>
            )}
          </Stack.Navigator>

          {isShowMenu && (
            <BottomMenu currentRoute={currentRoute as string} changeRoute={navRef.navigate} />
          )}
        </>
      )}
    </NavigationContainer>
  );
});

export default Navigator;
