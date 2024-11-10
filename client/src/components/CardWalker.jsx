import React from 'react'

export default function CardWalker() {
    return (
        <div className='w-72'>
            <img className='w-full rounded-xl' src='https://es.mypet.com/wp-content/uploads/sites/23/2021/03/paseador-de-perro.jpg' alt='algo' />
            <div className='flex justify-between items-center mt-2'>
                <h2 className='text-xl font-semibold'>William Igo</h2>
                <p className='py-2 px-4 bg-black text-white rounded-xl'>$3/h</p>
            </div>
        </div>
    )
}
