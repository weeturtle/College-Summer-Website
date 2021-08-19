import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../Features/Basket/basketSlice";

export const store = configureStore({
    reducer: {
        basket: basketReducer
    }
})

export type RootState = ReturnType<typeof store.getState>