import { auth, db, storage } from './firebaseApp';
import * as requests from './requests';

export default {
  db,
  auth,
  storage,
  ...requests,
};
