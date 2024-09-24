import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from './slice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore,  persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

export  const rootReducer = combineReducers({
  Authentication:authReducer
})


export const  persistConfig ={
  key:'root',
  storage:AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware:getDefaultMiddleware=>
    getDefaultMiddleware({
      serializableCheck:{
        ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
      }
    })
    
  
});

export let persistor =persistStore(store)




