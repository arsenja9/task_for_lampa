import {configureStore} from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import staff from './staff/slice'
import filter from  './filter/slice'
import cart from './cart/slice'

export const store = configureStore({
    reducer: {
        staff,
        filter,
        cart
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch