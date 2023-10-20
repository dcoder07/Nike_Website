import React from "react";


const ServiceCard = ({ serviceIcon, content, label }) => {
  return (
    <div className='flex flex-col justify-center gap-5 rounded-2xl shadow-2xl p-10 '>
      <div>
        <img src={serviceIcon} alt="sevice-icons" className="h-5 w-5 "/>
      </div>
      <span className='font-bold text-3xl'>{label}</span>
      <p className='text-lg leading-7 text-slate-500'>{content}</p>
    </div>
  );
};

export default ServiceCard;
