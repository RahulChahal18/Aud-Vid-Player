import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({handleFormSubmit}) => {
    const {register,handleSubmit,reset} =useForm()
  return (
    <div className=' mt-10 flex justify-center'>
      {/* gap in line below was gap-10 */}
      <form className='flex gap-[3vw] w-[60vw] flex-wrap justify-center' onSubmit={handleSubmit(data=>{handleFormSubmit(data);reset()})}>
        <input {...register('SongName')} required className='rounded-md px-2 py-1 text-base font-semibold outline-none' placeholder='Song Name' type="text" />
        <input {...register('Artist')} required className='rounded-md px-2 py-1 text-base font-semibold outline-none' placeholder='Artist' type="text" />
        <input {...register('vid')} required className='rounded-md px-2 py-1 text-base font-semibold outline-none' placeholder='Video/Audio url' type="text" />
        
        <input type="submit" className='hover:cursor-pointer rounded-md bg-blue-500 px-5 py-1 text-white font-semibold'/>
      </form>
    </div>
  )
}

export default Form
