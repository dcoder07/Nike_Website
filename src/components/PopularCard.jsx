import React from 'react'
import star from '../assets/icons/star.svg'

const PopularCard = ({PopularImg,name,price}) => {
  return (
    <div>
        <div><img src={PopularImg} heigth={282} width={300} alt='popular-shoe-image'/></div>
        <div className='flex flex-1 flex-col gap-2 text-2xl mt-5'>
       <div className='flex gap-2 text-slate-500'><img src={star}/>(4.8)</div> 
       <span className='font-semibold'>{name}</span>
       <span className='font-bold text-[#FF6452]'>{price}</span>
        </div>
    </div>
  )
}

export default PopularCard