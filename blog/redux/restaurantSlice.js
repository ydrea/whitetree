import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 4 }

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
  incr: (state) => {state.count += 1},
  decr: (state) => {state.count -= 1}  
    }
})

export const {incr, decr} = restaurantSlice.actions
export const selectEm = (state) => state.counter.count

export default restaurantSlice.reducer