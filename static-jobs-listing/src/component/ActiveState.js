import React from 'react'

const ActiveState = () => {
  return (
    <div className='max-w-[75vw] left-[12%] my-[4.5rem] absolute top-[2.5%] w-full rounded-md px-8 py-4 bg-white flex justify-between items-center'>
        <div className='flex gap-4'>
            <div className='active flex gap-2'>
                <p className='active-p'>hello</p>
                <span className='active-span'><i class="fa-solid fa-xmark" style={{fontSize: '1.5rem'}}></i></span>
            </div>
            <div className='active flex gap-2'>
                <p className='active-p'>Javascript</p>
                <span className='active-span'><i class="fa-solid fa-xmark" style={{fontSize: '1.5rem'}}></i></span>
            </div>
        </div>
        
        <button className='text-darkCyan capitalize font-medium hover:underline'>clear</button>
    </div>
  )
}

export default ActiveState