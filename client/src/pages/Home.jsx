import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile } from '../redux/usersSlice.js'
import axios from 'axios'
import Cookies from 'js-cookie'
import Hero from '../components/Hero.jsx'
import BestWalkers from '../components/BestWalkers.jsx'

export default function Home() {


    const data = useSelector(state => state.users.profile)

    const dispatch = useDispatch();

    const getProfile = async () => {
        let response = await axios.get('http://localhost:3000/api/profile', { withCredentials: true })
        dispatch(getUserProfile(response.data))
    }

    useEffect(() => {
        getProfile()
    }, []);


    console.log(data);


    return (
        <div className='absolute z-[-1] top-0 left-0 right-0'>
            <Hero />
            <BestWalkers />
            <p>{data.name}</p>
            <p>{data.role}</p>
        </div>
    )
}
