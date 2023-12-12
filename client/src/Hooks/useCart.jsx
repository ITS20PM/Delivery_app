import React, { createContext, useContext, useState } from "react";
import { all_food_list } from '../Components/Data/foodData';

const CartContext = createContext(null);

export default function CartProvider({children}) {

    const [cartItems, setCartItems] = useState(
        all_food_list.slice(0, 12)
            .map(food => ({food, quantity: 1, price: food.price}))
    );
    const [totalPrice, setTotalPrice] = useState(40);
    const [totalCount, setTotalCount] = useState(3);

    return (
        <CartContext.Provider value={{cart:{items:cartItems, totalPrice, totalCount } } }>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);