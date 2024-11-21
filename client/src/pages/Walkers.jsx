import React from 'react'
import AllWalkers from '../components/AllWalkers'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroCustom from '../components/HeroCustom'
import heroImg from '../assets/bento2.png'

export default function Walkers() {

    let heroWalkers = {
        title: "Paseadores profesionales para el bienestar de tu mascota",
        paragraph: "Descubre paseadores cualificados que brindan atención personalizada y paseos seguros para tu mascota.",
        image: heroImg,
    }

    return (
        <div >
            <div>
                <Header />
            </div>
            <div className='pt-2'>
                <HeroCustom title={heroWalkers.title} paragraph={heroWalkers.paragraph} image={heroWalkers.image} />
            </div>
            <div>
                <AllWalkers />
            </div>
            <Footer />
        </div>
    )
}
