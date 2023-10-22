import React from "react";
import shoe8 from "../assets/images/shoe8.svg";

const Premium = () => {
  return (
    <section className='flex max-xl:flex-col gap-4 w-full max-container  '>
      <div className='basis-1/2 md:p-12 p-5 '>
        <h1 className='space-x-4 leading-20 font-bold max-sm:text-5xl text-7xl'>
          We Provide You <span className='text-[#FF6452]'>Premium</span> Shoes
        </h1>
        <div className='mt-14 max-sm:text-lg text-2xl text-gray-500'>
          <p>
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className='mt-5'>
            Our dedication to detail and excellence ensures your satisfaction
          </p>
        </div>
        <button className="mt-8 text-white flex gap-2 justify-center items-center bg-[#FF6452] py-2 px-4 rounded-full text-lg">
          View Details
        </button>
      </div>

      <div className='flex justify-center p-5 basis-1/2'>
        <img
          src={shoe8}
          alt='product detail'
          width='570'
          height='522'
          class='object-contain'
        />
      </div>
    </section>
  );
};

export default Premium;
