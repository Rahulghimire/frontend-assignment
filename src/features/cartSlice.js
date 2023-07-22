import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
    items:[],
    totalQuantity:0,
    totalPrice:0
  };

export const cartSlice=createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
        let find=state.carts.findIndex((item)=>item.id===action.payload.id);
        if(find>=0){
            state.carts[find].quantity+=1;
        }
        else{
            const newItem = { ...action.payload, quantity: 1 };
            state.carts.push(newItem);
        }
        },
        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.carts.reduce(
              (cartTotal, cartItem) => {
                console.log("carttotal", cartTotal);
                console.log("cartitem", cartItem);
                const { price, quantity } = cartItem;
                console.log(price, quantity);
                const itemTotal = price * quantity;
                cartTotal.totalPrice += itemTotal;
                cartTotal.totalQuantity += quantity;
                return cartTotal;
              },
              {
                totalPrice: 0,
                totalQuantity: 0,
              }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
          },
          removeItem: (state, action) => {
            state.cart = state.carts.filter((item) => item.id !== action.payload);
          },
    },
});

export const {addToCart ,getCartTotal,removeItem}=cartSlice.actions;
export default cartSlice.reducer;