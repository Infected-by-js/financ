import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '@/components/screens';
import { BottomMenu } from '@/components/organisms';
import { useUserContext } from '@/hooks';
import { useBottomMenuNavigation } from './hooks';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const { user, isInitLoading } = useUserContext();
  const { navRef, currentRoute } = useBottomMenuNavigation();

  const isLoggedIn = user;

  /*
  * Пока определяется юзер

  * если пользователь есть в асинк сторе - запрашиваем его данные с бека
  *  - если есть 4-х знач код тогда показываем экран логина с кодом
  *  - если нет - логиним автоматически
  * 
  * показываем экран Entrance на котором грузим все данные для отображения
  * 
  * если пользователя нет в асинк сторе тогда показываем экран логина
  * после логина перекидываем на экран Entrance
  * 
  * 
  * 
  * валидировать на существующий код тут
  */

  const getInitialRouteName = useCallback(() => {
    if (!isLoggedIn) return 'Register';

    return !user?.passwordShort ? 'LoginWithCode' : 'Entrance';
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
            {isLoggedIn ? (
              <>
                <Stack.Screen name="Entrance" component={Screens.EntranceScreen} />
                <Stack.Screen name="Home" component={Screens.HomeScreen} />
                <Stack.Screen name="History" component={Screens.HistoryScreen} />
                <Stack.Screen name="Settings" component={Screens.SettingsScreen} />
                <Stack.Screen name="Operation" component={Screens.OperationScreen} />
              </>
            ) : (
              <>
                <Stack.Screen name="SignUp" component={Screens.SignUpScreen} />
                <Stack.Screen name="Login" component={Screens.LoginScreen} />
                <Stack.Screen name="LoginWithCode" component={Screens.LoginWithCodeScreen} />
              </>
            )}
          </Stack.Navigator>

          {isLoggedIn && currentRoute && (
            <BottomMenu currentRoute={currentRoute} changeRoute={navRef.navigate} />
          )}
        </>
      )}
    </NavigationContainer>
  );
};

export default Navigator;
