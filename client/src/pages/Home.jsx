import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile } from '../redux/usersSlice.js'
import axios from 'axios'
import Cookies from 'js-cookie'
import Hero from '../components/Hero.jsx'
import BestWalkers from '../components/BestWalkers.jsx'
import Footer from '../components/Footer.jsx'
import Bento from '../components/Bento.jsx'

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
        <div className='relative'>
            <Header />
            <Hero />
            <BestWalkers />
            <Bento />
            {/* <p>{data.name}</p>
            <p>{data.role}</p> */}
            <Footer />
        </div>
    )
}
