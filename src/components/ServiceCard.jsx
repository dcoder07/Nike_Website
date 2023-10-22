import React from "react";

const ServiceCard = ({ imageIcon, content, label }) => {
  return (
    <div className='flex flex-col justify-center gap-5 rounded-2xl shadow-2xl p-10 '>
      <div className="w-auto">
        <img src={imageIcon} alt='sevice-icons' className='h-12 w-12 rounded-full bg-[#FF6452] p-2 ' />
      </div>
      <span className='font-bold text-3xl'>{label}</span>
      <p className='text-lg leading-7 text-slate-500 '>{content}</p>
    </div>
  );
};

export default ServiceCard;
