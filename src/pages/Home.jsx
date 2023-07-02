import React from 'react';
import AllProducts from './AllProducts';

const Home = () => {
    return (
        <div className='2xl:mx-80 lg:mx-20 my-10 border-x-2 border-gray-300'>
            <div className='flex-col px-5 justify-center'>
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-black">We invest in the world’s potential</h1>
                <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                <a href="#" class="flex lg:mx-80 md:mx-60 py-2 my-5 justify-center items-center text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Learn more
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
            
            <div className='flex my-5 '>
                <AllProducts />
            </div>
            
        </div>
    );
};

export default Home;