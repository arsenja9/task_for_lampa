import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getCartFromLs} from "../../utils/getCartFromLs";
import {calcTotalPrice} from "../../utils/calcTotalPrice";
import {CartItem, CartSliceState} from "./types";


const initialState: CartSliceState = getCartFromLs()

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const findItem = state.items.find(obj => obj.id === action.payload.id)

            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.totalPrice = calcTotalPrice(state.items)
        },
        minusItem(state, action: PayloadAction<number>) {
            const findItem = state.items.find(obj => obj.id === action.payload)
            if (findItem) {
                findItem.count--
                state.totalPrice = calcTotalPrice(state.items);

            }
        },
        removeItem(state, actions: PayloadAction<number>) {
            state.items = state.items.filter(obj => obj.id !== actions.payload)

        },
        clearItem(state) {
            state.items = []
            state.totalPrice = 0

        },
        calculateTotalPrice(state) { // Новое действие для пересчета totalPrice
            state.totalPrice = calcTotalPrice(state.items);
        }
    }
})


export const {addItem, calculateTotalPrice, removeItem, minusItem, clearItem} = cartSlice.actions

export default cartSlice.reducer

