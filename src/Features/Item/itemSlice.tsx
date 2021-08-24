import { createAsyncThunk, createSlice, Slice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface comment {
    author: string;
    comment: string;
    approved: boolean;
}

export interface size {
    size: number;
    inStock: boolean;
    price: number;
}

export interface item {
    name: string;
    id: number;
    description: string;
    image: string;
    rating: number;
    comments: comment[];
    location: string;
    sizes: size[];
    notes: string[];
    roast: string;
}

const itemsInitialState: {
    items: item[],
    status: "fulfilled" | "pending" | "rejected" 
} = {
    items: [],
    status: "pending"
};

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
    const response = await fetch('/getItems', {
        method: "GET"
    });
    const JSONResponse = await response.json();
    return JSONResponse.default.items;
})

export const itemsSlice: Slice = createSlice({
    name: "items",
    initialState: itemsInitialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchItems.fulfilled, (state, {payload}) => {
            state.status = "fulfilled";
            state.items = payload;
            console.log(payload);
        })
        builder.addCase(fetchItems.pending, (state) => {
            state.status = "pending";
            console.log("pending");
        })
        builder.addCase(fetchItems.rejected, (state) => {
            state.status = "rejected"
            console.log("rejected");
        })
    }
})

export const selectItems = (state: RootState) => state.items.items;

export default itemsSlice.reducer;