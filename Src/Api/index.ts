import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { loggedIn, LoggedOut } from "../../Reducers/slice";
import { store } from "../../Reducers/store";





export const refreshToken = async () => {
  const accesstoken = await getToken();
  console.log('access Token======>', accesstoken);
  
  store.dispatch(loggedIn(accesstoken));  
  
  return accesstoken;  
};

 const axiosInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

 axiosInstance.interceptors.response.use(  
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
       

      // store.dispatch(LoggedOut());
      
     try{
      const newToken =await refreshToken();
      axios.defaults.headers.common['Authorization'] =  `Bearer ${newToken}`;

      const originalRequest =error.config;
      originalRequest.headers['Authorization'] =  `Bearer ${newToken}`;

      return axios(originalRequest);
     }
     catch(refreshErrror){
      return Promise.reject(refreshErrror)
     }
    }
    return Promise.reject(error);
  },
 );
export default axiosInstance;


const client_id = 'e3a8b972ac3344ad9fa653f3e53d5491'; 
const client_secret = '507fa9951a2b48268ff3c54790cd463a';


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
  await AsyncStorage.setItem('access_token', data.access_token); 
  return data.access_token;


}


export const Categories = async () => {
  try { 
    const response = await axiosInstance.get(
      '/browse/categories')
      return response.data.categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
  };



export const Genre = async () => {
  try {
    const response = await axiosInstance.get(
      '/recommendations/available-genre-seeds');
     
    

    console.log('===>', response.data);
    return response.data;
  } catch (error) {
    console.log('Error fetching Genres:', error);
    throw error;
  }
};

export const Releases = async () => {
  try {
    const response = await axiosInstance.get(
      '/browse/new-releases',
      
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
    const response = await axiosInstance.get(
      '/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B',
     
    );

    console.log('trackssss===>', response.data);
    return response.data;
  } catch (error) {
    console.log('Error fetching New Tracks:', error);
    throw error;
  }
};
export const Songs = async () => {
  try {

    const response = await axiosInstance.get(
      '/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA',
    
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

    const response = await axiosInstance.get(
      `/albums/${albumId}/tracks`, 
     
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
    const response = await axiosInstance.get(
      `/tracks/${id}`,
    
    );

    console.log('===>', response.data);
    return response.data;
  } catch (error) {
    console.log('Error fetching New Tracks:', error);
    throw error;
  }
};








