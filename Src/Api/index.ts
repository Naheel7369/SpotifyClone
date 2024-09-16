import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const client_id = 'b6695874e8e446e8898848a685af1d9a'; 
const client_secret = '079e5d2fa0994006a891831e7deb255c';

export async function getToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }).toString(),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${client_id}:${client_secret}`),
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Error ${error.error}: ${error.error_description}`);
  }

  const data = await response.json();
  await AsyncStorage.setItem('access_token', data.access_token); // Store the token for later use
  return data.access_token;
}


export const Categories = async () => {
  try {
    var accesstoken = await AsyncStorage.getItem('access_token');
    console.log(accesstoken,'Hello')
    if(!accesstoken){
      const tokenResponse = await getToken();
      accesstoken = tokenResponse.access_token; // Extract the access token from the response
      await AsyncStorage.setItem('access_token', accesstoken);
    }
   
    const response = await axios.get(
    'https://api.spotify.com/v1/browse/categories',
      {
        headers: { Authorization: 'Bearer ' + accesstoken },
      }
    );
  // console.log(response,'response from get Cat')
    // Accessing the categories from the response's data property
    const categories = response.data.categories;
    return categories;
  } catch (error) {
    console.log('Error fetching categories:', error);
    throw error;
  }
};

export const Genre = async () => {
  try {
    let accessToken = await AsyncStorage.getItem('access_token'); // Corrected typo
    
    if (!accessToken) {
      const tokenResponse = await getToken();
      accessToken = tokenResponse.access_token; // Extract the access token from the response
      await AsyncStorage.setItem('access_token', accessToken); // Store it for future use
    }

    const response = await axios.get(
      'https://api.spotify.com/v1/recommendations/available-genre-seeds',
      {
        headers: { Authorization: 'Bearer ' + accessToken },
      }
    );
console.log('===>',response.data);

    return response.data; // Ensure you are returning the data correctly
  } catch (error) {
    console.log('Error fetching Genres:', error);
    throw error; // Re-throw the error for further handling
  }
};

