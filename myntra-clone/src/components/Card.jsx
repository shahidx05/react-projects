import React from 'react'

const Card = (props) => {
  return (
    <div className='p-2 w-48 bg-indigo-200  hover:shadow-lg transition' >
        <div className="w-full h-48 overflow-hidden">
            <img className='w-full h-full object-cover  hover:scale-105 transition' src={props.img} alt={props.name} />
        </div>
        <div className="mt-2">
            <h3 className='text-center text-base font-medium'>{props.name}</h3>
            <h2 className='text-center text-2xl font-bold' >{props.discount}</h2>
            <p className='text-center text-base font-medium' >Shop Now</p>
        </div>
    </div>
  )
}

export default Card