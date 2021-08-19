import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../Features/Basket/basketSlice";
import itemsReducer from "../Features/Item/itemSlice";

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        items: itemsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>