import React from "react";
import {products} from "../constants/index.js";
import PopularCard from "../components/PopularCard";

const Popular = () => {
  return (
    <section className="max-container">
      <div>
        <h1 className='text-[50px] font-bold'>
          Our <span className='text-[#FF6452]'>Popular</span> Products
        </h1>
        <p className='mt-8 text-[18px] leading-7 space-x-2 text-slate-500'>
          Experience top-notch quality and style with our sought-after
          selections. <br />
          Discover a world of comfort, design, and value
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:flex justify-center items-center gap-16 md:gap-12 mt-16'>
          {products.map((product,index) => (
            <PopularCard 
            key={index}
            PopularImg={product.imgURL}
            name={product.name}
            price={product.price} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
