
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const user = createSlice({
 name: 'friends',

  initialState,
 reducers: {
   addFriendToStore: (state, action) => {
     state.value.push(action.payload);
   },
 },
});

export const { addFriendToStore } = user.actions;
export default user.reducer;