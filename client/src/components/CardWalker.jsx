import React from 'react'

export default function CardWalker({ photo, name, hourlyRate }) {
    return (
        <div className='w-80'>
            <img className='w-full h-[250px] rounded-xl' src={photo} alt='algo' />
            <div className='flex justify-between items-center mt-2'>
                <h2 className='text-xl font-semibold'>{name}</h2>
                <p className='py-2 px-4 bg-black text-white rounded-xl'>${hourlyRate}/h</p>
            </div>
        </div>
    )
}
