import React from "react";

const Subscribe = () => {
  return (
    <section className="flex max-lg:flex-col max-lg:gap-10 max-container mb-16">
      <div className='text-4xl  font-bold leading-tight basis-1/2'>
        <h1>
          Sign Up for <span className='text-[#FF6452]'>Updates</span>
          <br />& Newsletter
        </h1>
      </div>
      <div className="flex max-sm:flex-col justify-items items-center flex-1 basis-1/2 relative ">
        <input
          className=' mx-16 p-5  w-full border border-black rounded-full '
          type='email'
          placeholder='rocky202@gmail.com '
        /> <button className="absolute max-sm:-bottom-[60px] sm:right-[80px] text-white flex gap-2 justify-center items-center bg-[#FF6452] py-2 px-4 rounded-full text-lg">
         Sign Up
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
