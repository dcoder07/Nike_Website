import React from "react";
const ShoeCard = ({ image, bigShoe, handleChange, img }) => (
  <div className={`rounded-2xl p-4 border-2  w-auto bg-shoe shadow-xl cursor-pointer
  ${
        img === bigShoe
          ? "border-red-900"
          : "border-gray-200"
      }
  `}>
    <img
      onClick={(e) => handleChange(e.target.alt)}
      src={image}
      alt={bigShoe}
    />
  </div>
);

export default ShoeCard;
