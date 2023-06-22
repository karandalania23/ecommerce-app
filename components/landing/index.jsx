import React from 'react';
import Navbar from './navbar';
import Welcome from './welcome';
import Cards from './cards';
import Footer from './footer';
const Landing = () => {
    return (
        <>
        <Navbar/>
        <div class='bg-[#a072d4]'>
        <Welcome/>
        <div>
        <Cards class="m-auto"/>
        <Cards/>
        <Cards/>
        </div>
        <Footer/><hr/>
        </div>
        </>
    )
};

export default Landing;