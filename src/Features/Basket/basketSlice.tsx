import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { item } from "../Item/itemSlice";


const initialState: {basket: BasketItem[], isBasket: boolean} = {
    basket: [],
    isBasket: true
};


export interface BasketItem extends item {
    sizeIndex: number;
    quantity: number;
}

export const basketSlice: Slice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addBasketItem: (state, action: PayloadAction<BasketItem>) => {
            const {id, sizeIndex} = action.payload;
            const index = state.basket.findIndex((item: BasketItem) => (item.id === id && item.sizeIndex === sizeIndex));


            if (index === -1) {
                state.basket.push({...action.payload, quantity: 1});
            } else {
                state.basket[index].quantity += 1;
            }
        },
        increaseQuantity: (state, action: PayloadAction<BasketItem>) => {
            const {id, sizeIndex} = action.payload;
            const index = state.basket.indexOf((item: BasketItem) => item.id === id && item.sizeIndex === sizeIndex);

            state.basket[index].quantity += 1;
        },
        decreaseQuantity: (state, action: PayloadAction<BasketItem>) => {
            const {id, sizeIndex} = action.payload;
            const index = state.basket.indexOf((item: BasketItem) => item.id === id && item.sizeIndex === sizeIndex);

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