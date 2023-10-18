import React from "react";

const Button = ({ label, imgURL }) => {
  return (
    <button className='flex gap-2 justify-center items-center bg-[#FF6452] py-2 px-4 rounded-full text-white text-lg 
    hover:scale-110 transition duration-700 ease-in-out hover:ring ring-orange-600 ring-offset-1 outline-4 '  >
      {label}
      <img src={imgURL} alt='right-arrow' />
    </button>
  );
};

export default Button;
