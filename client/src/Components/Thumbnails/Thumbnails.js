import React from "react";
import { Link } from "react-router-dom";

export default function Thumbnails({ foods }) {
    return <ul>
        {
            foods.map(food =>
                    <li key={food.id}>
                        <Link to={`/food/${food.id}`}>
                            <img src={food.image_url} />
                        </Link>
                        <div>
                            <div>{food.name}</div>
                            <span className={`${food.favorite}`}></span>
                        </div>
                    </li>
                )
        }
    </ul>
}