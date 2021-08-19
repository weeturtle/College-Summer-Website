import { createSlice, Slice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { item } from "../Item/itemSlice";


const initialState: {items: item[]} = {
    items: []
};

export const basketSlice: Slice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addItem: (state, action) => {

        }
        
    }
})

export const selectBasket = (state: RootState) => state.basket.basket;

export default basketSlice.reducer;