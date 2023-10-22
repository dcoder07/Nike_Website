import React from "react";

const FootCard = ({heading,names}) => {
  return (
    <div className="p-5" >
   <h1 className="text-2xl font-bold mb-5">{heading}</h1>
   <ul className="leading-10">
    {names.map((links)=>
    <li className=' text-lg text-[#CCCCCC]'>{links.name}</li>)}
   </ul>
    </div>
  );
};

export default FootCard;
