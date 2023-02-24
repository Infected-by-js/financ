export default interface Errors {
  NonExpected: string;
  'auth/email-already-exists': string;
  'auth/invalid-email': string;
  'auth/invalid-password': string;
  'auth/user-not-found': string;
  nest: {
    nestNest: string;
  };
}
