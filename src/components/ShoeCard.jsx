import React from "react";
const styles ={
  borderColor : "none",
}
const ShoeCard = ({ image, bigShoe, handleChange }) => (
  <div
    className='rounded-2xl p-4 border-2 border-gray-300 w-auto bg-shoe shadow-2xl cursor-pointer'
  >
    <img
      onClick={(e) => handleChange(e.target.alt)}
      src={image}
      alt={bigShoe}
    />
  </div>
);

export default ShoeCard;
