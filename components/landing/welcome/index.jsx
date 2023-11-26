import React from 'react';
import Image from 'next/image';
const Welcome = () => {
    return (
        <>
            <div class="p-7 ">
                <div class="bg-[#343434] rounded-xl">
                    <div class="absolute text-white p-10 ">
                        <div class="text-3xl font-semibold">
                            Hi There !
                        </div><br /><br />
                        <div class="text-5xl font-semibold">
                            Welcome to E-Com
                        </div><br />
                        <div class="text-xl font-semibold">
                            A marketplace for all your needs related to clothing and skincare.
                        </div><br />
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Shop Now</button>
                    </div>
                    <Image src="/imgmain.png" width={400} height={200} className='ml-auto p-5 rounded-r-xl' />
                </div>
            </div>
        </>
    )
};

export default Welcome;