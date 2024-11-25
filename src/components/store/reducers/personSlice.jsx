import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info : null,
}

export const personSlice = createSlice({
  name: 'person',
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

// Action creators are generated for each case reducer function
export const { loadMovie, removeMovie } = personSlice.actions;

export default personSlice.reducer