import { createSlice } from "@reduxjs/toolkit";
import submitOrder from "./handleFormSubmit";

const CartSlice=createSlice({
    name:"cart",
    initialState:{cartlist:[],total:0,status:"",Fullcardbuynow:false,orderlist:[]},
    reducers:{
        ADDTOCART:(state,action)=>{
            state.cartlist=[...state.cartlist,action.payload];
            state.total=state.total+action.payload.item.price;
        },
        REMOVE:(state,action)=>{
            state.cartlist=state.cartlist.filter((product)=>action.payload.UID!=product.UID);
            state.total=state.total-action.payload.item.price;
            
        },
        ORDER:(state,action)=>{
            state.orderlist=[action.payload];
            state.Fullcardbuynow=true;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(submitOrder.pending,(state)=>{
            state.status="Pending";
        })
        .addCase(submitOrder.fulfilled,(state)=>{
            state.status="Submitted";
            state.cartlist=[];
            state.total=0;
        })
        .addCase(submitOrder.rejected,(state)=>{
            state.status="rejected";
    })
    }
});export default CartSlice;
export const  CartActions=CartSlice.actions;