import { createAsyncThunk } from "@reduxjs/toolkit";

const submitOrder=createAsyncThunk("submit/order",
    async(orderDetails)=>{
        
    const response= await fetch("https://amazonclone-json-backend-server.onrender.com/orders",{
        method:"Post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(orderDetails)
    });
    return await response.json();
});
export default submitOrder;
