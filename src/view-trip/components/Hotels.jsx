import React from 'react'
import { Link } from 'react-router-dom'
import HotelCardItem from './HotelCardItem'

const Hotels = ({trip}) => {
  return (
    <div>
        <h2 className='font-bold text-xl mt-5 text-center mb-2 sm:text-left'>Hotel Recommendation</h2>
      
        <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mb-2'>
        {
  trip?.tripData?.hotelOptions?.map((hotel, index) => (
   <HotelCardItem hotel={hotel} index={index} key={index}/>
  ))
}

        </div>
           
    </div>
  )
}

export default Hotels
