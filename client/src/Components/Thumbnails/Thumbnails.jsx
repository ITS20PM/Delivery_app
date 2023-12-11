import React from "react";
import { Link } from "react-router-dom";

export default function Thumbnails({ foods }) {
    return <ul>
        {
            foods.map(food =>
                    <li key={food.id}>
                        <Link to={`/food/${food.id}`}>
                            <div className="mt-10 mb-5 ml-20 text-xl bg-lime-400 mr-20">
                                {food.name}
                            </div> 
                        </Link>
                        <span className="ml-20">${food.price}.00</span>
                      
                    </li>
                )
        }
    </ul>
}