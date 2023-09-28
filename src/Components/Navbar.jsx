import React from 'react';

const Navbar = () => {
    return (
        <div className = 'container mx-auto justify-between py-4 flex font-sans sticky top-0 z-50 bg-white w-full'>
            
            <div className='flex gap-2'>
                <img src="logo.png" className='w-8 h-8' alt="" />
                <h1 className = 'text-2xl font-bold'>HOME</h1>
            </div>
            <div className = 'flex justify-between gap-4'>

            <div className='py-2'>
                <ul className='flex justify-between gap-4 cursor-pointer'>
                <li>Home</li>
                <li>About us</li>
                <li>Properties</li>
                <li>Service</li>
                </ul>
                
            </div>
            
            {/* Search input */}
            <div>

            </div>

            <div>
                <button className='text-white px-4 py-2 rounded-full bg-[#302e23]'>Contact Us</button>
            </div>
            </div>
        </div>

        )

}

export default Navbar