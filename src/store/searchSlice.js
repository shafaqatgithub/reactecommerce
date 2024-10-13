import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";

const initialState = {
    searchProducts : [],
    serachProductStatus : STATUS.IDLE
}
 
const searchSlice = createSlice ({
    name : "search" ,
    initialState,
    reducers : {
        clearSearch : (state , action) => {
            state.searchProducts = []
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase
    }
})

export const fetchAsyncSearchProduct = createAsyncThunk ('serach-product/ fetch' , async () => {
    const response = await fetch()
})