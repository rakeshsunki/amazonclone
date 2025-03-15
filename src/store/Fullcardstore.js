import { createSlice } from "@reduxjs/toolkit";

const FullcardSlice=createSlice({
    name:"fullcard",
    initialState:{item:{},tab:"false"},
    reducers:{
        CLICKED:(state,action)=>{
            state.item=action.payload;
            state.tab="true";
        },
        CROSS:(state)=>{
            state.item={},
            state.tab="false";
        }
    }
});
export default FullcardSlice;
export const FullcardActions=FullcardSlice.actions;