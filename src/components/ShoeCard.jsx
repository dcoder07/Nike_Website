import React from "react";
function handleClick(e) {
    console.log(e.target.alt);
}
const ShoeCard = (shoe) => (
  <div
    key={shoe.bigShoe}
    className='rounded-2xl p-4 border border-red-900 w-auto bg-shoe shadow-2xl'
  >
    <img onClick={handleClick} src={shoe.URL} alt={shoe.bigShoe} />
  </div>
);

export default ShoeCard;
