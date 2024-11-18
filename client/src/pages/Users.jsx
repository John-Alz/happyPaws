import React from 'react'
import UserList from '../components/Dashboard/UserList'

export default function Users() {


    return (
        <div className='w-11/12 m-auto pt-11'>
            <div>
                <h2 className='text-2xl font-semibold'>Lista de usuarios</h2>
                <p>Mira toda la informacion de nuestros usuarios</p>
            </div>
            <UserList />
        </div>
    )
}
