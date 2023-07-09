import React, { useState, useEffect } from 'react';

const Cards = () => {
  const [fake, setfake] = useState([]);
  console.log(fake);
  useEffect(() => {
    fakestore();
  }, [])
  const fakestore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsondata = await response.json();
    setfake(jsondata);
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {fake.map((value, index) => {
          return (
            <>
              <div className='p-10'>

                <div className="w-full h-[600px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                  <div className="px-5 pb-5">

                    <img class="p-8 rounded-t-lg items-center m-auto justify-center" src={value.image} width='250px' alt="product image" />
                    <div>
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {value.title}
                      </h5>

                      <div className="flex items-center mt-2.5 mb-5">


                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                          {value.rating.rate}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                          ${value.price}
                        </span>
                        <a
                          href={`/${index}`}
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </>
          )
        })}
      </div>

    </>
  )
};

export default Cards;