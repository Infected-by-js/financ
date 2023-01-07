import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomMenu from '@/components/BottomMenu';
import { useAuth, useBottomMenuNavigation } from '@/hooks';
import {
  EntranceScreen,
  HistoryScreen,
  HomeScreen,
  LoginScreen,
  LoginWithCodeScreen,
  OperationScreen,
  SettingsScreen,
  SignUpScreen,
  SplashScreen,
} from '@/screens';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const { user, isInitLoading } = useAuth();
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
    <NavigationContainer ref={navRef}>
      {isInitLoading ? (
        <SplashScreen />
      ) : (
        <>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={getInitialRouteName()}
          >
            {isLoggedIn ? (
              <>
                <Stack.Screen name="Entrance" component={EntranceScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="History" component={HistoryScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
                <Stack.Screen name="Operation" component={OperationScreen} />
              </>
            ) : (
              <>
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="LoginWithCode" component={LoginWithCodeScreen} />
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
