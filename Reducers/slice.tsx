import {createSlice, PayloadAction} from '@reduxjs/toolkit';
const initialState = {
    loggedIn:false,
    accesstoken:null as string|null 
  };
  const auth = createSlice({
    name: 'Authentication',
    initialState,
    reducers: {
        loggedIn: (state, action: PayloadAction<{accesstoken:string }>) => {
        console.log("payload",action.payload,action.payload.accesstoken);
        state.loggedIn=true;
        state.accesstoken=action.payload.accesstoken;

      },
      LoggedOut: (state) => {
        state.loggedIn=false;
        state.accesstoken=null;
      },
    },
  });
  export const { loggedIn, LoggedOut } = auth.actions;
export default auth.reducer;