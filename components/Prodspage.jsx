import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from './landing/navbar';
import Welcome from './landing/welcome';
import Newsletter from './landing/newsletter';
import Footer from './landing/footer';
export default ({ index }) => {
    const router = useRouter()
    const ind = router.query.prods;

    const [fake, setfake] = useState([]);
    useEffect(() => {
        fakestore();
    }, [])
    const fakestore = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsondata = await response.json();
        setfake(jsondata);
    }
    console.log(fake);
    return (
        <>
            <div className='bg-[#a072d4]'>
                <Navbar />
                <Welcome />

                <div className='p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <img src={fake[ind].image} width={500} />
                    <div>
                        <div className='text-white font-bold md:font-normal text-4xl md:text-6xl my-10 md:my-5'>{fake[ind].title}</div>
                        <div className='px-2'><hr /></div>
                        <div className='text-white text-5xl font-bold mt-8'>${fake[ind].price}</div>
                        <div className='text-white mt-2'>Inclusive of all taxes.</div>
                        <div className='mt-3 flex'>
                            <span className="bg-blue-100 text-blue-800 text-lg font-semibold  px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">
                                {fake[ind].rating.rate}
                            </span><div className='text-white mx-2 text-lg'>{fake[ind].rating.count} left in stock.</div>
                        </div>
                        <div className='px-2 my-8'><hr /></div>
                        <div className='flex'>
                            <div className='text-white text-lg font-bold'>Category: </div>
                            <div className='text-white text-lg capitalize ml-2'>{fake[ind].category}</div>
                        </div><br />
                        <div className='flex'>
                            <div className='text-white text-lg font-bold'>Description: </div>
                            <div className='text-white text-lg capitalize ml-2'>{fake[ind].description}</div>
                        </div>
                        <div className='px-2 my-8'><hr /></div>
                        <div className='flex'>
                        <a
                          href='#'
                          className="mr-2 md:mr-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Buy Now
                        </a>
                        <div className='text-white text-2xl font-extralight '>|</div>
                        <a
                          href='#'
                          className="ml-2 md:ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Add to cart
                        </a>
                        </div>
                    </div>
                </div>
                <Newsletter />
                <Footer /><hr />
            </div>
        </>
    );
};