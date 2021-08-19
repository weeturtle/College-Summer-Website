import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";


const initialState: {basket: basketItem[]} = {
    basket: []
};

interface basketItem extends Item {
    quantity: number;
}

interface Item {
    name: string;
    id: number;
    size: number;
}

export const basketSlice: Slice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addBasketItem: (state, action: PayloadAction<Item>) => {
            const {id, size} = action.payload;
            const index = state.basket.indexOf((item: basketItem) => item.id === id && item.size === size);
            
            if (index === -1) {
                state.basket.push({...action.payload, quantity: 1});
            } else {
                state.basket[index].quantity += 1;
            }
        }
        
    }
})

export const selectBasket = (state: RootState) => state.basket.basket;

export default basketSlice.reducer;