import React from "react";
import Button from "../components/Button.jsx";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { statistics, shoes } from "../constants/index.js";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [currentImg, setCurrentImg] = React.useState(bigShoe1);
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
      <div className='relative flex-1 flex justify-center sm:items-center pt-10 pb-24 max-xl:rounded-2xl xl:min-h-screen sm:py-40 bg-shoe '>
        <img className='object-cover' src={currentImg} alt='bigShoe1' />
        <div className='flex sm:gap-6 gap-4 absolute bottom-[-5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe, index) => (
            <ShoeCard
              key={index}
              imageURL={shoe}
              bigShoe={shoe.bigShoe}
              image={shoe.thumbnail}
              img={currentImg}
              handleChange={(event) => {
                setCurrentImg(event);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
