import React from "react";
import { reviews } from "../constants";
import CustomerCard from "../components/CustomerCard";

const Customer = () => {
  return (
    <section className='flex flex-col sm:gap-16 w-full gap-10 max-container bg-[#F5F6FF] py-24 px-10 sm:p-24 tracking-wide '>
      <div className='flex flex-col items-center justify-center text-center'>
        <h1 className='font-bold text-5xl'>
          What Our <span className='text-[#FF6452]'>Customers</span> Say?
        </h1>
        <p className=' text-gray-500 text-xl m-8'>
          <p>Hear genuine stories from our satisfied customers about their</p>
          <p>exceptional experiences with us.</p>
        </p>
      </div>
      <div className='flex max-xl:flex-col justify-center gap-5'>
        {reviews.map((review, index) => (
          <CustomerCard
            key={index}
            customerImg={review.imgURL}
            rating={review.rating}
            content={review.feedback}
            name={review.customerName}
          />
        ))}
      </div>
    </section>
  );
};

export default Customer;
