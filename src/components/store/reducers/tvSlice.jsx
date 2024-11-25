import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info : null,
}

export const tvSlice = createSlice({
  name: 'rv',
  initialState,
  reducers: {
    loadMovie: (state,action)=>{
     state.info = action.payload;
    },
    removeMovie: (state,action)=>{
     state.info = null;
    }
  },
})

export const { loadMovie, removeMovie } = tvSlice.actions;

export default tvSlice.reducer