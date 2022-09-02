import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');

// const myReducer = createReducer(0, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });

// const add = createAction('items/add');
// const remove = createAction('items/remove');

// const itemsReducer = createReducer([], {
//   add]: (state, action) => [...state, action.payload],
//   [add]: (state, action) => state.push(action.payload),
//   [remove]: (state, action) => state.filter(item => item.id !== action.payload),
// });
