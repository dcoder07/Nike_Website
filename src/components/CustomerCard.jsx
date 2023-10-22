import React from "react";
import star from '../assets/icons/star.svg'


const CustomerCard = ({ customerImg, rating,content,name}) => {
  return (
    <div className='flex flex-col gap-5 items-center text-center justify-center'>
      <div><img
        className='rounded-full h-[7rem]'
        alt='customer-image'
        src={customerImg}
      /></div>
      <p className="text-slate-500 text-xl max-sm:text-sm px-10  ">{content}</p>
      <p className="flex gap-4 text-slate-500 text-xl max-sm:text-sm"><img src={star}/>({rating})</p>
      <p className="font-bold text-3xl mb-16">{name}</p>
    </div>
  );
};
export default CustomerCard;
