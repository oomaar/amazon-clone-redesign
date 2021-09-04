import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                item => item.id === action.payload.id
            );

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
            };
        },
        removeFromCart: (state, action) => {
            const index = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id);
            let newCart = [...state.cartItems];

            if (index <= 0) {
                // The item exists in the cart, remove it
                newCart.splice(index, 1);
                state.cartItems = newCart;
            } else {
                console.warn(
                    `Cant remove product (id: ${action.payload.id}) as it's not in the cart`
                );
            };

            return state;
        },
    }
});

export const selectItems = (state) => state.cart.cartItems;
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;