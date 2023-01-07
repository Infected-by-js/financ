export interface RootStackParamList {
  //* initial
  Splash: undefined;

  //* protected
  Home: undefined;
  History: undefined;
  Settings: undefined;
  Operation: undefined;

  //* public
  // 3 steps of register:  email + password -> avatar + username -> create num code?
  SignUp: undefined;
  // simple screen with email + password fields and switch to reg button
  Login: undefined;
  // show only if user admited num code
  LoginWithCode: undefined;
  // here need to load  all data before start app
  Entrance: undefined;
}

export type ScreenName = keyof RootStackParamList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
