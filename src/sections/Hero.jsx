import React from "react";
import Button from "../components/Button.jsx";
import { arrowRight } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3} from "../assets/images";
import { statistics } from "../constants/index.js";

const Hero = () => {
  return (
    <section
      id='home'
      className=' flex flex-col xl:flex-row w-ful min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 pl-16 leading-10 '>
        <p className='text-[#FF6452] font-montserrat relative mt-10  bottom-10 text-lg'>
          Our Summer collections
        </p>
        <h1 className='xl:whitespace-nowrap text-8xl relative z-10 font-bold spacing-x-2'>
          The New Arrival
          <br />
          <span className='text-[#FF6452]'>Nike</span> Shoes
        </h1>
        <p className='mb-14 mt-10 text-lg md:whitespace-nowrap leading-none text-slate-500 sm:max-w-sm'>
          Dicover stylish Nike arrivals, <br />
          quality comfort, and innovation for your active life
        </p>
        <Button label='Shop Now' imgURL={arrowRight} />
        <div className='flex flex-col sm:flex-row justify-start gap-8 p-2 m-5 items-start flex-wrap w-full mt-20'>
          {statistics.map((stats) => (
            <div key={stats.label}>
              <p className='text-6xl sm:text-4xl font-bold'>{stats.value}</p>
              <p className='leading-7 text-slate-500'>{stats.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center z-10  py-10'>
        <img src={bigShoe1} alt='bigShoe1' />
      </div>
    </section>
  );
};

export default Hero;
