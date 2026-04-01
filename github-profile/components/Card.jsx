import React from 'react'

const Card = ({data}) => {
  return (
    <div className='w-60 border-2 flex flex-col items-center p-5 gap-3 rounded-2xl'  >
        <img className='w-50 rounded-full '  src={data.avatar_url} alt=""  />
        <h1 className='text-3xl font-medium' >{data.login}</h1>
        <a className='font-normal text-blue-800' href={data.html_url} target="_blank" >Get Profile</a>
    </div>
  )
}

export default Card