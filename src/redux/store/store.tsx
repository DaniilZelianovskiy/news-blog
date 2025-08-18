import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from '../slices/newsSlice'

export const store = configureStore({
    reducer:{
        news: blogsReducer,
    }
})


export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;