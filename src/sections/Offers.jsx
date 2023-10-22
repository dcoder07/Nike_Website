import React from "react";
import offerImg from "../assets/images/offer.svg";
import Button from "../components/Button";
import arrow from "../assets/icons/arrow-right.svg";
const Offers = () => {
  return (
    <section className='max-container flex max-xl:flex-col gap-10'>
      <div className=' basis-1/2'>
        <img src={offerImg} />
      </div>
      <div className='font-semibold flex flex-col gap-4 justify-center p-5 basis-1/2 tracking-wider'>
        <h1 className='text-5xl font-bold'>
          <span className='text-[#FF6452]'>Special</span> Offer
        </h1>
        <div className='text-gray-500 text-[18px]'>
          <p className='space-x-3 mb-4'>
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className='space-x-3'>
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional
          </p>
        </div>
        <div className='flex max-sm:flex-col gap-5 mt-5'>
          <Button label='Shop Now' imgURL={arrow} />
          <button className='border border-black px-6 py-3 rounded-full text-slate-500 tracking-wide'>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offers;
