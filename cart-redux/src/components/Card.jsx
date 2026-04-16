import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { add, remove } from "../features/cart/cartSlice";

const Card = ({ food }) => {
    const [inCart, setInCart] = useState(false)
    const dispatch = useDispatch()


    const addHandler = () => {
        if(inCart){
            dispatch(remove())
        }
        else{
            dispatch(add())
        }
        setInCart(prev => !prev)
    }
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 w-64">
            <img
                src={food.image}
                alt={food.name}
                className="rounded-xl h-40 w-full object-cover"
            />
            <h2 className="text-lg font-semibold mt-2">{food.name}</h2>
            <p className="text-gray-500">{food.description}</p>
            <div className="flex justify-between items-center mt-3">
                <span className="font-bold">₹{food.price}</span>
                {inCart ? (
                    <button className="bg-green-500 text-white px-3 py-1 rounded-lg"
                        onClick={addHandler}
                    >
                        Remove
                    </button>
                ) : (
                    <button className="bg-orange-500 text-white px-3 py-1 rounded-lg"
                        onClick={addHandler}
                    >
                        Add
                    </button>
                )}
            </div>
        </div>
    );
};

export default Card;