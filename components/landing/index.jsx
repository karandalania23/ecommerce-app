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
        <Navbar/>
        <div class='bg-[#a072d4]'>
        <Welcome/>
        <Header name='Products -'/>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <Cards/>
            </div>
            <div>
                <Cards/>
            </div>
            <div>
                <Cards/>
            </div>
            <div>
                <Cards/>
            </div>
            <div>
                <Cards/>
            </div>
            <div>
                <Cards/>
            </div>
        </div>
        <Header name='Sign in for Newsletter -'/>
        <Newsletter/>
        <Footer/><hr/>
        </div>
        </>
    )
};

export default Landing;