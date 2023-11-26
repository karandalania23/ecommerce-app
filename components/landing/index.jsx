import React from 'react';
import Navbar from './navbar';
import Welcome from './welcome';
import Cards from './cards';
import Footer from './footer';
import Header from './header';
import Newsletter from './newsletter';



const Landing = () => {



    return (
        <>
            <Navbar />
            <div className='bg-[#f2f2f2]'>
                <Welcome />
                <Header name='Products -' />

                <div>
                    <Cards />
                </div>

                <Header name='Sign in for Newsletter -' />
                <Newsletter />
                <Footer /><hr />
            </div>
        </>
    )
};

export default Landing;