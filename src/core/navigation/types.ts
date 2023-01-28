export interface RootStackParamList {
  //* initial
  Splash: undefined;

  //* protected
  EntranceWithCode: undefined;
  Entrance: undefined;
  Home: undefined;
  History: undefined;
  Settings: undefined;
  Operation: undefined;

  //* public
  SignUp: undefined;
  Login: undefined;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
