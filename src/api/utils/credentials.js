import { AsyncStorage } from "react-native";

export const storeCredentials = async (data) => {
  console.log('data on storeCredentials', data);
  try {
    await AsyncStorage.setItem('accessToken', data.user.token);
  } catch (error) {
    // Error saving data
    console.log('error on saving credentials', error);
  }
}

export const getCredentials = async () => {
  try {
    const value = await AsyncStorage.getItem('accessToken');
    if (value !== null) {
      // We have data!!
      console.log('get credentials value', value);
      return value
    }
   } catch (error) {
     // Error retrieving data
     console.log('error on getting credentials', error);
   }
}

export const removeCredentials = async () => {
  try {
    const value = await AsyncStorage.removeItem('accessToken');
    if (value !== null) {
      console.log('value deleted', value);
      return value
    }
  } catch (error) {
         console.log('error on deleting credentials', error);
  }
}