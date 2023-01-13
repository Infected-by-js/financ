import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  getItem: async <T>(key: string): Promise<T | null> => {
    try {
      const value = await AsyncStorage.getItem(key);

      return value ? JSON.parse(value) : null;
    } catch {
      return null;
    }
  },
  setItem: async (key: string, data: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log('Error saving data in Storage', error);
    }
  },

  removeItem: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log('Error removing data from Storage', error);
    }
  },
};
