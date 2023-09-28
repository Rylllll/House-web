import React, {useState} from 'react';
import {data} from '../data/data.js'
import {AiOutlineShoppingCart} from 'react-icons/ai';


const Properties = () => {
    // console.log(data)

    const [house, setHouses] = useState(data);

    const filterType = (category) =>{
        setHouses(
            
        )

    }


    return (
      <div className='container mx-auto mt-20 font-sans'>
        <h1 className='text-3xl text-[#302e23] font-semibold text-center'>Top Rated Houses and Apartments</h1>

    

        <div className='mt-6 flex justify-between'>
            <div className='grid'>

         
            <p className='text-sm mt-2 font-bold text-gray-700'>Filter Type</p>
        <div className='flex gap-1.5 mt-2'>
            <button className='px-4 py-1 rounded-full text-[#68654e] border-2 border-[#68654e] hover:text-white hover:bg-[#68654e]'>All</button>
            <button className='px-4 py-1 rounded-full text-[#68654e] border-2 border-[#68654e] hover:text-white hover:bg-[#68654e]'>Houses</button>
            <button className='px-4 py-1 rounded-full text-[#68654e] border-2 border-[#68654e] hover:text-white hover:bg-[#68654e]'>Apartments</button>
            <button className='px-4 py-1 rounded-full text-[#68654e] border-2 border-[#68654e] hover:text-white hover:bg-[#68654e]'>Farmlands</button>
            <button className='px-4 py-1 rounded-full text-[#68654e] border-2 border-[#68654e] hover:text-white hover:bg-[#68654e]'>Countryside</button>
        </div>
        </div>

<div className='grid'>


            <p className='text-sm mt-2 font-bold text-gray-700'>Filter Price</p>
        <div className='flex gap-1.5 mt-2'>
            <button className='px-4 py-1 rounded-full text-[#68654e] border-2 border-[#68654e] hover:text-white hover:bg-[#68654e]'>$</button>
            <button className='px-4 py-1 rounded-full text-[#68654e] border-2 border-[#68654e] hover:text-white hover:bg-[#68654e]'>$$</button>
            <button className='px-4 py-1 rounded-full text-[#68654e] border-2 border-[#68654e] hover:text-white hover:bg-[#68654e]'>$$$</button>
            <button className='px-4 py-1 rounded-full text-[#68654e] border-2 border-[#68654e] hover:text-white hover:bg-[#68654e]'>$$$$</button>
           
        </div>
        </div>
        </div>

        {/* Display of houses*/}

        <div className='grid grid-cols-1 gap-4  mt-8 mx-auto'>
            {house.map((item, index)=> (
                <div key ={index} className='flex gap-8'>
                    <img className='rounded-2xl max-h-[300px] w-full object-cover' src={item.image} alt={item.name} />
                    <div className='justify-center mx-auto'>
                        <div className='flex justify-between'>
                        <p className='text-4xl font-bold text-[#302e23] mt-14'>{item.name}</p>
                        
                        <AiOutlineShoppingCart size={50} className='cursor-pointer px-3 py-2 rounded-full shadow-lg mt-10 text-[#302e23]'/>
                    
                        
                        </div>
                       
                        <p className='text-gray-700 text-sm'><span>{item.Pretext}</span></p>
                        <p className='text-sm mt-4 '><span className='px-4 py-2 rounded-full bg-[#302e23] text-white'>{item.price}</span></p>
                        <p className='text-gray-700 text-lg mt-4'><span>{item.description}</span></p>
                        
                       
                    </div>
                </div>
            ))}
        </div>

        </div>

        )

}
export default Properties