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
    let accesstoken = await AsyncStorage.getItem('access_token');
    if (!accesstoken) {
      accesstoken = await getToken(); // getToken already returns the token
      if (!accesstoken) {
        throw new Error('Failed to retrieve a valid access token');
      }
      await AsyncStorage.setItem('access_token', accesstoken);
    }

    const response = await axiosInstance.get(
      'https://api.spotify.com/v1/browse/categories',
      {
        headers: { Authorization: 'Bearer ' + accesstoken },
      }
    );

    const categories = response.data.categories;
    return categories;
  } catch (error) {
    console.log('Error fetching categories:', error);
    throw error;
  }
};

export const Genre = async () => {
  try {
    let accessToken = await AsyncStorage.getItem('access_token');

    if (!accessToken) {
      accessToken = await getToken(); // getToken already returns the token
      if (!accessToken) {
        throw new Error('Failed to retrieve a valid access token');
      }
      await AsyncStorage.setItem('access_token', accessToken);
    }

    const response = await axiosInstance.get(
      'https://api.spotify.com/v1/recommendations/available-genre-seeds',
      {
        headers: { Authorization: 'Bearer ' + accessToken },
      }
    );

    console.log('===>', response.data);
    return response.data;
  } catch (error) {
    console.log('Error fetching Genres:', error);
    throw error;
  }
};

export const Releases = async () => {
  try {
    let accessToken = await AsyncStorage.getItem('access_token');
    const response = await axiosInstance.get(
      'https://api.spotify.com/v1/browse/new-releases',
      {
        headers: { Authorization: 'Bearer ' + accessToken },
      }
    );

    console.log('===>', response.data);
    return response.data;
  } catch (error) {
    console.log('Error fetching New Releases:', error);
    throw error;
  }
};

export const Tracks = async () => {
  try {
    let accessToken = await AsyncStorage.getItem('access_token');
    const response = await axiosInstance.get(
      'https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B',
      {
        headers: { Authorization: 'Bearer ' + accessToken },
      }
    );

    console.log('===>', response.data);
    return response.data;
  } catch (error) {
    console.log('Error fetching New Tracks:', error);
    throw error;
  }
};
export const Songs = async () => {
  try {
    let accessToken = await AsyncStorage.getItem('access_token');

    const response = await axiosInstance.get(
      'https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA',
      {
        headers: { Authorization: 'Bearer ' + accessToken },
      }
    );

    console.log('=======>', response.data);
    return response.data;
  } catch (error) {
    console.log('Error fetching New Recommendated Tracks:', error);
    throw error;
  }
};

export const Singers = async (albumId: string) => {
  try {
    let accessToken = await AsyncStorage.getItem('access_token');

    const response = await axiosInstance.get(
      `https://api.spotify.com/v1/albums/${albumId}/tracks`, 
      {
        headers: { Authorization: 'Bearer ' + accessToken },
      }
    );

    console.log('Album tracks response:', response.data);
    return response.data;
  } catch (error) {
    console.log('Error fetching album tracks:', error);
    throw error;
  }
};


export const GettingSongs = async (id) => {
  try {
    let accessToken = await AsyncStorage.getItem('access_token');
    const response = await axiosInstance.get(
      `https://api.spotify.com/v1/tracks/${id}`,
      {
        headers: { Authorization: 'Bearer ' + accessToken },
      }
    );

    console.log('===>', response.data);
    return response.data;
  } catch (error) {
    console.log('Error fetching New Tracks:', error);
    throw error;
  }
};


const axiosInstance = axios.create({
  baseURL: 'https://accounts.spotify.com/api/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(`${client_id}:${client_secret}`+ getToken),
  },
})

axiosInstance.interceptors.response.use(  
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log('call the refresh token api here')
      // Handle 401 error, e.g., redirect to login or refresh token
    }
    return Promise.reject(error)
  },
);

export const SpotifyToken = async () => {
  try {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', 'b6695874e8e446e8898848a685af1d9a'); 
    params.append('client_secret', '079e5d2fa0994006a891831e7deb255c'); 
    const accessToken = await AsyncStorage.getItem('access_token');
    if (accessToken) {
      return accessToken;
    }
    const response = await axiosInstance.post('/token', params.toString());

    const { access_token } = response.data;

    await AsyncStorage.setItem('access_token', access_token);

    return access_token;

  } catch (error: any) {
    console.error('Error fetching access token:', error.response?.data || error);
  }
};
export default axiosInstance;






