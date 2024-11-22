import React from 'react'
import FormAddPet from '../components/Dashboard/FormAddPet'

export default function AddPet() {
    return (
        <div className='w-8/12 m-auto flex flex-col '>
            {/* <h2 className='text-3xl font-semibold pb-4 pt-4'>Crea una mascota</h2> */}
            <div>
                <FormAddPet />
            </div>
        </div>
    )
}
