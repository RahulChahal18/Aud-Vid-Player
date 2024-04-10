import React from 'react'
import Card from './Card'
const Cards = ({users,handleRemove}) => {
  return (
    <div className='w-full h-fit max-h-96 overflow-auto p-4 flex justify-center gap-4 flex-wrap'>
      {
        users.length ? users.map((item,index)=>{
            return <Card key={index} id={index} handleRemove={handleRemove} user={item} />
        }) : <h1 className='text-4xl opacity-[50%] outline-double px-4 py-3'>Add music</h1>
      }
      
    </div>
  )
}

export default Cards
