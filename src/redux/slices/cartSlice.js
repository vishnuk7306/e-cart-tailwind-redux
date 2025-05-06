import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        addToCart : (state,actionFromComponent)=>{
          const existingProduct = state.find(item=>item.id==actionFromComponent.payload.id)
          if(existingProduct){
              existingProduct.quantity++
              existingProduct.totalprice = existingProduct.quantity*existingProduct.price
              const remainingProduct = state.filter(item=>item.id!=existingProduct.id)
              state =[{...existingProduct,remainingProduct}]
          }else{
            state.push({...actionFromComponent.payload,quantity:1,totalprice:actionFromComponent.payload.price})
          }
        },
        incrementQuantity:(state,actionByCart)=>{
          const existingProduct = state.find(item=>item.id==actionByCart.payload)
          if(existingProduct){
            existingProduct.quantity++
            existingProduct.totalprice = existingProduct.quantity*existingProduct.price
            const remainingProduct = state.filter(items=>items.id!=existingProduct.id)
            state = [...remainingProduct,existingProduct]
          }
        },
        removeCartItem:(state,actionByCart)=>{
             return state.filter(item=>item.id!=actionByCart.payload)
        },
        decrementQuantity:(state,actionByCart)=>{
           const existingProduct = state.find(items=>items.id==actionByCart.payload)
           if(existingProduct){
            existingProduct.quantity--
            existingProduct.totalprice = existingProduct.quantity*existingProduct.price
            const remainingProduct = state.filter(item=>item.id!=existingProduct.id)
            state =[...remainingProduct,existingProduct]
           }
           
        },
        emptyCart : (state)=>{
            return state=[]
        }
    }
})

export default cartSlice.reducer
export const {addToCart,incrementQuantity,removeCartItem,decrementQuantity,emptyCart} = cartSlice.actions