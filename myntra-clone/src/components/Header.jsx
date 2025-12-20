import React from 'react'
import { CiUser, CiHeart } from "react-icons/ci";
import { PiHandbagThin } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import logo from "../assets/images/logo.webp"

const Header = () => {
    return (
        <div className='w-full flex px-6 md:px-14 py-3 mb-6 items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.08)] '>
            <div><img className='w-14 cursor-pointer' src={logo} alt="" /></div>
            <div className='flex gap-10 text-xs font-bold text-gray-700'>
                <p className="cursor-pointer hover:text-black">MEN</p>
                <p className="cursor-pointer hover:text-black">WOMEN</p>
                <p className="cursor-pointer hover:text-black">KIDS</p>
                <p className="cursor-pointer hover:text-black">HOME</p>
                <p className="cursor-pointer hover:text-black">BEAUTY</p>
                <p className="cursor-pointer hover:text-black">GENZ</p>
                <p className="cursor-pointer hover:text-black">STUDIO</p>
            </div>
            <div className='w-100 lg:w-130 flex gap-4 items-center border-2 border-gray-200 bg-gray-100 px-3 py-2 rounded-sm'>
                <IoSearchOutline className='text-base text-gray-500' />
                <input className='text-sm w-full focus:outline-none text-gray-500' placeholder='Search for products, brands and more' type="text" />
            </div>
            <div className='flex gap-7 items-center '>
                <div className='flex flex-col items-center gap-0.5' >
                    <CiUser className='text-xl text-gray-600 hover:text-black cursor-pointer' />
                    <p className='text-xs font-bold text-center'>Profile</p>
                </div  >
                <div className='flex flex-col items-center gap-0.5'>
                    <CiHeart className='text-xl text-gray-600 hover:text-black cursor-pointer' />
                    <p className='text-xs font-bold text-center'>Wishlist</p>
                </div>
                <div className='flex flex-col items-center gap-0.5'>
                    <PiHandbagThin className='text-xl text-gray-600 hover:text-black cursor-pointer' />
                    <p className='text-xs font-bold text-center'>Bag</p>
                </div>
            </div>
        </div>
    )
}

export default Header