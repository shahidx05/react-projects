import React from 'react'
import { useSelector} from 'react-redux'

const Header = () => {
    const count = useSelector((state)=>state.foodcart.count)
    return (
        <div className="flex justify-between items-center p-4 shadow-md bg-white">
            <h1 className="text-2xl font-bold text-orange-500">FoodCart</h1>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-xl">
                Cart ({count})
            </button>
        </div>
    );
}

export default Header