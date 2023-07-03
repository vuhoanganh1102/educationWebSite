import React from 'react';
import Product from './Product.tsx';
import { useState } from 'react';

const Products =[
    {
        title:"Noteworthy technology acquisitions 2021",
        state:"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    {
        title:'Vinh Nguyen',
        state:"sn: 1 11 2002. Idol PTIT"
    },
    {
        title:"Vinh Nguyen",
        state:"sn: 1 11 2002. Idol PTIT"
    },
    {
        title:"Vinh Nguyen",
        state:"yeu Chi. Idol PTIT"
    },
    {
        title:"Vinh Nguyen",
        state:"yeu huyen. Idol PTIT"
    },
    {
        title:"Vinh Nguyen",
        state:"sn: 1 11 2002. Idol PTIT"
    },
    {
        title:"Tuan anh Le",
        state:"sn: ....? . Cung la Idol PTIT"
    },
    {
        title:"Tuan anh Le",
        state:"sn: ...? . Cung la Idol PTIT. Yeu Thuy."
    },
    {
        title:"Tuan anh Le",
        state:"sn: ...? . Cung la Idol PTIT. Yeu Thuy."
    }

];
const AllProducts = () => {
    
    const [searchTerm,SetSearchTerm] =useState('');
    const [product,setProduct] =useState([]);
    
       
   
    console.log(searchTerm);
    return (
        <div >
            <div className='sm:mx-20 mx-3 justify-center flex'>
                <form className='lg:w-[42rem] w-[32rem] max-[599px]:w-72 '>   
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input 

                        onChange={(e) => SetSearchTerm(e.target.value)}
                        
                        type="search" id="default-search" 
                        className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                         placeholder="Type Vinh or Tuan or technology ..." required /> 
                        <button
                        
                        type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700
                         hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2
                          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
            </div>
            <div className='flex flex-row flex-wrap justify-center'>
                {
                    Products
                    .filter((item) => {
                        return searchTerm.toLocaleLowerCase() === ''
                        ? item
                        : item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
                    })
                    .map((item,index) =>(
                    <Product product={item} key={index}/>))
                }
                
                {
                
                   Products
                   .filter((item) => {
                       return searchTerm.toLocaleLowerCase() === ''
                       ? item
                       : item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
                   })
                   .length === 0 ? <div className='h-3 font-bold'>NOT FOUND</div>:''
                   
                }
            </div>
        </div>
        

        
    );
};

export default AllProducts;