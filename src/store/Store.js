import {configureStore,createSlice} from "@reduxjs/toolkit";
import SignInList from "./headerlist";
import productSlice from "./products";
import FullcardSlice from "./Fullcardstore";
import CartSlice from "./cart&orders";
const headerSlice=createSlice({
    name:"header",
    initialState:{headList:{},signinstatus:"False",langStatus:"False"},
    reducers:{
        IN:(state)=>{
            state.headList=SignInList;
            state.signinstatus="True";
        },
        OUT:(state)=>{
            state.headList={};
            state.signinstatus="False";
        },
        LANGIN:(state)=>{
            state.langStatus="True";
        
        },
        LANGOUT:(state)=>{
            state.langStatus='False';
            
        }
    }
});
const AmazonStore=configureStore({
    reducer:{
        header:headerSlice.reducer,
        products:productSlice.reducer,
        fullcard:FullcardSlice.reducer,
        cart:CartSlice.reducer,
    }
});
export const headerActions=headerSlice.actions;
export default AmazonStore;