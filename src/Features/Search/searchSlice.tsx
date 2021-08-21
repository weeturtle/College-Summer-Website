import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { item } from "../Item/itemSlice";

export const searchSlice = createSlice({
    "name": "search",
    initialState: {
        search: ""
    },
    reducers: {
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        clearSearchTerm: (state) => {
            state.search = '';
        }
    }
})

export const { setSearchTerm, clearSearchTerm } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.search;

export const selectSearchItems = (state: RootState) => {
    const items: item[] = Object.values(state.items.items);
    return items.filter((item: item) => item.name.toLowerCase().includes(state.search.search.toLowerCase()))
}

export default searchSlice.reducer;