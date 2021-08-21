import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../Features/Basket/basketSlice";
import itemsReducer from "../Features/Item/itemSlice";
import searchReducer from "../Features/Search/searchSlice";

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        items: itemsReducer,
        search: searchReducer
    }
})

export type RootState = ReturnType<typeof store.getState>