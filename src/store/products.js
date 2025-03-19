import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const FetchProducts=createAsyncThunk("fetch/products",
    async(category)=>{
    const response=await(fetch(`https://amazonclone-json-backend-server.onrender.com/${category}`));
    return response.json();
})
const productSlice=createSlice({
    name:"products",
    initialState:{List:[],status:"Empty"},
    reducers:{
     
    },
    extraReducers:(builder)=>{
        builder.addCase(FetchProducts.pending,(state)=>{
            state.status="pending";
        })
        .addCase(FetchProducts.fulfilled,(state,action)=>{
            state.status="Fetching Completed";
            state.List=action.payload;
            console.log(action.payload);
        })
        .addCase(FetchProducts.rejected,(state)=>{
            state.status="Error";
        });

    }
});
export default productSlice;
export const productActions=productSlice.actions;