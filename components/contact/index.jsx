import React from 'react';
import Navbar from '../landing/navbar';
import Welcome from '../landing/welcome';
import Conform from './conform';
import Header from '../landing/header';
import Footer from '../landing/footer';

const Contact = ()=>{
    return(
        <>
        <Navbar/>
        <div className='bg-[#a072d4]'>
        <Welcome/>
        <Header name='Contact -'/>
        <Conform/>
        <Footer/>
        <hr/>
        </div>
        </>
    )
}
export default Contact;