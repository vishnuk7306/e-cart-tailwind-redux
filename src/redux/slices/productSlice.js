                    // home il products veruthan olla slice

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// redux inn asyncronus funtion handle cheyyan pattathilla avrkk syncronus funtione handle cheyyan pattathollu
// redux il asyncornous funtionae handle cheyyan nmmk oru API call ond "createAsynThunk" , stiring inn 2 part ond
// createAsynthunk inn rand arguments ahn ollath 1."eth slice/eth action" 2.oru call back funtion ahn ()=>{} ath return cheyyunne promise ahn
// createAsynthunk return cheyyunne 3 actions ahn "pending,fulfilled,rejected" ee action ahn 2nd argument ayitt kodukkande

// axios use cheyyth API call cheyythekkunu , axios ile GET method ahn use cheyythekkunne
export const featchProducts = createAsyncThunk("products/featchProducts",async()=>{
    const result = await axios.get("https://dummyjson.com/products")
    sessionStorage.setItem('allproducts',JSON.stringify(result.data.products))
    
    return result.data.products
    
})

// slice

const productSlice = createSlice({
    name:"products",  
      initialState:{
        allProducts:[],
        dummyAllProducts : [],
        loading : false,
        errorMsg:""
    },
    reducers:{
           searchProducts : (state,actionByHeader)=>{
            // case sensitive akkan vendi ahn tolowercase method use cheyythekkunne
            // athil ondo ennu ariyan vendi ahnn includes enna method use cheyythekkunne
        state.allProducts = state.dummyAllProducts.filter(items=>items.title.toLowerCase().includes(actionByHeader.payload))
           }
    },
    extraReducers:(builder)=>{
        builder.addCase(featchProducts.fulfilled,(state, apiResult)=>{
            state.allProducts = apiResult.payload
            state.dummyAllProducts = apiResult.payload
            state.loading=false
            state.errorMsg = ""

        })

        builder.addCase(featchProducts.pending,(state)=>{
            state.allProducts=[]
            state.dummyAllProducts = []
            state.loading = true
            state.errorMsg = ""

        })
        builder.addCase(featchProducts.rejected,(state)=>{
            state.allProducts=[]
            state.dummyAllProducts =[]
            state.loading = false
            state.errorMsg = "api call failed"
        })
    }
})
export default productSlice.reducer
export const {searchProducts} = productSlice.actions