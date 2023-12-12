import React from 'react';
import { Link } from "react-router-dom";
import { useCart } from '../../Hooks/useCart';
import Title from '../../Components/Title/Title';

export default function CartPage() {
    const {cart} = useCart();
    return <>
        <Title title="Cart Page"></Title>

        {cart && cart.items.length > 0 && 
            <div className=''>
                <ul className="flex flex-wrap grid grid-cols-4">
                    {cart.items.map(item => 
                        <li key={item.food.id}>
                            <div className='ml-40 mt-2'>
                                <Link to={`/food/${item.food.id}`}>{item.food.name}</Link>
                            </div>

                            <div className='ml-40 mt-2'>
                                <select className="bg-gray-400 rounded-lg" value={item.quantity}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>
                            </div>

                            <div className='ml-40 mt-2'>${item.price}</div>

                            <div>
                                <button className='bg-blue-500 text-black py-2 px-2 rounded ml-40 mt-2'>Remove</button>
                            </div>
                        </li>
                    )}
                </ul>

                
                <div className="ml-40 my-20 mr-80 px-7 py-7 bg-gradient-to-r from-cyan-500 bg-green-400 rounded-lg max-w-[50%] min-w-[50%]">
                    <div className='ml-10'>Total Items: {cart.totalCount}</div>
                    <div className='ml-10'>Total Price: ${cart.totalPrice}</div>
                </div>

                <Link to="/checkout" className='ml-40 px-2 py-2 bg-slate-400 rounded-lg max-w-[25%] min-w-[25%]'>Checkout</Link>
              
            </div>
        }
    </>
}