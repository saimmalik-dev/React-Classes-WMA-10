import React from 'react'

function ResponsiveCard() {
    return (
        <div className='w-full sm:w-[50%] md:w-[50%] lg:w-[30%] m-10 p-5 border-1 sm:border-amber-500 rounded-xl bg-[#f1f1f1]'>
            <img src="https://media.istockphoto.com/id/1458782106/photo/scenic-aerial-view-of-the-mountain-landscape-with-a-forest-and-the-crystal-blue-river-in.jpg?s=1024x1024&w=is&k=20&c=iPdhO2H3jeYh4UWmNlrXNmiiK04iaLykIMiD9u1yDq4=" alt="" className='rounded-xl' />


            <h1 className='text-xl sm:text-3xl font-semibold font-serif'>
                Be the one of the few to feel the nature.
            </h1>
            <p className='text-sm text-gray-600'>
                Want to connect with nature? Want to see the wonders of it? Want visit the places you never visited before? Join with Us for visiting the northern areas of Pakistan from Queen of Mountains (Muree) to the Mount Everest...!
            </p>

            <button className='bg-green-500 px-5 py-2 hover:bg-green-700 hover:cursor-pointer rounded-xl text-white font-bold mt-10'>
                Let's Go..!
            </button>

        </div>
    )
}

export default ResponsiveCard