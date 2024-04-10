import React from 'react'
import ReactPlayer from "react-player/lazy";

const Card = ({user,index,handleRemove,id}) => {
  const {SongName,Artist,vid} = user;

  return (
    <div className='w-[24vw] bg-zinc-100 rounded-lg flex flex-col items-center p-2'>
        <div className='image w-full h-[240px] rounded-sm overflow-hidden bg-zinc-200'>
            <ReactPlayer 
                height={220}
                width="100%"
                controls
                url={vid} 
            />
        </div>
        <h1 className='mt-1 text-xl font-semibold text-center leading-none'>{`${SongName? SongName:"Nil"}`}</h1>
        <h4 className='opacity-60 text-sm font-semibold'>{`${Artist? Artist:"Nil"}`}</h4>
        {/* <p className='mt-1 text-center text-xs font-semibold leading-1 tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam ipsa neque.</p> */}
        <button className='px-3 py-1 bg-red-600 text-sm rounded-md font-semibold text-white mt-4' onClick={()=>handleRemove(id)}>Remove It</button>
  </div>
  )
}

export default Card
