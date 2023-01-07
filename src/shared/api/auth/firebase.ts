import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { initializeAuth } from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth/react-native';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBFc7ZSfjcWJZcuP6R1yg--TXNRPNByWO0',
  authDomain: 'pouch-as-bank.firebaseapp.com',
  projectId: 'pouch-as-bank',
  storageBucket: 'pouch-as-bank.appspot.com',
  messagingSenderId: '988734083989',
  appId: '1:988734083989:web:18276d0fc6bffdfc17dc9c',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
