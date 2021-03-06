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

// USE WITHOUT NETLIFY
//
// export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
//     const response = await fetch('/getItems', {
//         method: "GET"
//     });
//     const JSONResponse = await response.json();
//     return JSONResponse.default.items;
// })

// USE WITH NETLIFY

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
    const response = await fetch('https://cofftea.netlify.app/.netlify/functions/fetchItemsNetlify', {
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

export const selectItemById = (id: number) => (state: RootState) => {
    const itemList: item[] = Object.values(state.items.items);
    return itemList.filter((Item: item) => Item.id === id)[0];
};

export const selectItems = (state: RootState) => state.items.items;

export default itemsSlice.reducer;