import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';


const Hero = () => {
    return (
        <div className="container mx-auto">
  <div className="relative max-h-[600px]">
    <div className="absolute w-full h-full bg-black/20 rounded-xl flex flex-col justify-center items-center text-center">
      <h1 className="text-white text-6xl font-semibold"><span className='text-[#302e23]'>Journey</span> To Your <span className='text-[#302e23]'>Perfect</span>  Home</h1>
      <p className="text-white text-center text-sm px-16">
        Our team is dedicated to ensuring that you have access to the best information and the finest apartments across the country. We prioritize excellence by conducting extensive research and staying updated on the latest real estate trends. 
      </p>
      <div class="mt-8 flex flex-col items-center relative" id="search-section">
        <div className='absolute left-5 top-1/2 transform -translate-y-1/2 '>
        <AiOutlineSearch size={20}/>
        </div>
    
        <input
          type="text"
          id="search-input" 
          class="md:w-custom lg:w-custom xl:w-[800px] w-80 py-4 px-12 text-sm border-gray-300 focus:outline-none rounded-lg"
          placeholder="Search apartments..."
        />
        <button
          type="button"
          id="search-button"
          class="absolute right-2 top-2 px-4 py-1.5 bg-[#68654e] border-[#68654e] text-white hover:opacity-50 transition rounded-md"
        >
          Search
        </button>
      </div>
      
      <div className='mt-2 flex gap-4'>
      <p className="text-[#302e23] text-center text-sm  font-semibold">
       Popular Search :
      </p>

      <div className='justify-between flex gap-2'>

        <div className='px-3 bg-white/90 rounded-md'><span className='text-sm'>Resident House</span></div>
        <div className='px-3 bg-white/90 rounded-md'><span className='text-sm'>Studio Apartment</span></div>
        <div className='px-3 bg-white/90 rounded-md'><span className='text-sm'>Country Side</span></div>
        <div className='px-3 bg-white/90 rounded-md'><span className='text-sm'>Farmland</span></div>


      </div>

      </div>
     
    </div>
    <img
      className="rounded-xl w-full max-h-[600px]"
      src="https://images.pexels.com/photos/5998120/pexels-photo-5998120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt=""
    />
  </div>
</div>

      


        )

}
export default Hero