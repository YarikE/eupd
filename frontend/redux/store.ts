'use client'

import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import userReducer from './Features/user/userSlice'
import whatSlice from './Features/whatSlice'

const reducers = combineReducers({
    user: userReducer,
    whatSlice,
})

export const store = configureStore({
    reducer: reducers,
    // middleware: [thunk],
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware()
      .prepend(/* ... */)
      .concat(/* ... */),
    // ...
})
export type AppDispatch = typeof store.dispatch;
export type RootState =ReturnType<typeof reducers>;
