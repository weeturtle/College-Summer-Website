import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";


const initialState: {basket: basketItem[], isBasket: boolean} = {
    basket: [],
    isBasket: true
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
            const index = state.basket.findIndex((item: basketItem) => (item.id === id && item.size === size));


            if (index === -1) {
                state.basket.push({...action.payload, quantity: 1});
            } else {
                state.basket[index].quantity += 1;
            }
        },
        increaseQuantity: (state, action: PayloadAction<Item>) => {
            const {id, size} = action.payload;
            const index = state.basket.indexOf((item: basketItem) => item.id === id && item.size === size);

            state.basket[index].quantity += 1;
        },
        decreaseQuantity: (state, action: PayloadAction<Item>) => {
            const {id, size} = action.payload;
            const index = state.basket.indexOf((item: basketItem) => item.id === id && item.size === size);

            if (state.basket[index].quantity === 1) {
                state.basket.pop(index);
            } else {
                state.basket[index].quantity += 1;
            }
        },
        toggleBasket: (state, action: PayloadAction<boolean>) => {
            state.isBasket = action.payload;
        }
    }
})

export const selectBasket = (state: RootState) => state.basket.basket;

export const selectIsBasket = (state: RootState) => state.basket.isBasket;

export const { addBasketItem, increaseQuantity, decreaseQuantity, toggleBasket } = basketSlice.actions;

export default basketSlice.reducer;