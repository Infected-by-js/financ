import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
// TODO: Replace type to generic
import { User } from '@/types/models';
import { auth, db, storage } from './firebaseApp';

export const loginWithShortPassword = (passwordShort: number): void => {};

export const saveImageToStorage = async (uri: string) => {
  const blob = await new Promise<Blob | never>((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => resolve(xhr.response);
    xhr.onerror = () => reject(new TypeError('Network request failed'));

    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  const fileRef = ref(storage, Date.now().toString(16));

  await uploadBytes(fileRef, blob);

  return getDownloadURL(fileRef);
};

export const register = async (user: Omit<User, '_id'>): Promise<User | never> => {
  try {
    const userDoc = await createUserWithEmailAndPassword(auth, user.email, user.password);

    const newUser = {
      ...user,
      _id: userDoc.user.uid,
    } as User;

    if (user.avatar) {
      newUser.avatar = await saveImageToStorage(user.avatar);
    }

    await addDoc(collection(db, 'users'), newUser);

    return newUser;
  } catch (error: any) {
    throw Error(error.message);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);

    console.log('USER ', user);

    return null;
  } catch (error: any) {
    throw Error(error.message);
  }
};
export const logout = () => {};
