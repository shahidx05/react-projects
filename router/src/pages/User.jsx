import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {name} = useParams()

  return (
    <div>{name} is here</div>
  )
}

export default User