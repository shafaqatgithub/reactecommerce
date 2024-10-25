import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";

const initialState = {
    searchProducts : [],
    searchProductStatus : STATUS.IDLE, 

}
 
const searchSlice = createSlice ({
    name : "search" ,
    initialState,
    reducers : {
        clearSearch : (state , action) => {
            state.searchProducts = []
        },
      
    },
    extraReducers : (builder) => {
        builder
        .addCase(fetchAsyncSearchProduct.pending , (state , action) => {
            state.searchProductStatus = STATUS.LOADING;

        })

        .addCase(fetchAsyncSearchProduct.fulfilled, (state, action) => {
            state.searchProducts = action.payload;
            state.searchProductStatus  = STATUS.SUCCEEDED;
        })

        .addCase(fetchAsyncSearchProduct.rejected, (state , action) => {
            state.searchProductStatus = STATUS.FAILED;
        })

    }
})

export const fetchAsyncSearchProduct = createAsyncThunk ('serach-product/fetch' , async (searchTerm) => {
    const response = await fetch(`${BASE_URL}/products/search?q=${searchTerm}`);
    const data = await response.json();
    console.log(data)
    return data.products;
})


export const getAsyncSearchProduct = (state) => state.search.searchProducts

export const {setSearchTerm} = searchSlice.actions;
export const { clearSearch} = searchSlice.actions;

export const getSearchProductsStatus = (state) => state.search.searchProductsStatus;
export default searchSlice.reducer;