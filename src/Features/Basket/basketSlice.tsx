import { createSlice, Slice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface comment {
    author: string;
    comment: string;
    approved: boolean;
}

interface quantity {
    quantity: number;
    inStock: boolean;
    price: number;
}

interface item {
    name: string;
    id: number;
    quantity: quantity[];
    desctiption: string;
    image: string;
    rating: number;
    comments: comment[];
    location: string;
    quantities: quantity[];
}

const initialState: item[] = [];

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