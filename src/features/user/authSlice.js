import { createSlice } from '@reduxjs/toolkit'
import storageService from '../../services/storageService';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: JSON.parse(storageService.getItem("currentUser")) || null
  },
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload
      console.log("current user ---> ", state.currentUser);
    },
    removeUser: (state) => {
      state.currentUser = null;
      storageService.removeItem('currentUser');
      storageService.removeItem('token');
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser , removeUser} = authSlice.actions

export default authSlice.reducer