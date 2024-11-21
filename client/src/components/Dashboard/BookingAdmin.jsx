import React from 'react'
import Booking from '../booking'

export default function BookingAdmin() {
    return (
        <div className='w-10/12 m-auto pt-12'>
            <h2 className='text-3xl font-bold  mb-4'>Crea tu paseo</h2>
            <div  >
                <Booking />
            </div>
        </div>
    )
}
