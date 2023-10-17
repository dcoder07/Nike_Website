import React from "react";
import headerLogo from "../assets/images/header-logo.svg";
import "../fonts/Montserrat-Black.ttf";
import { navLinks } from "../constants/index";

const Nav = () => {
  return (
    <header
      className='padding-x py-2 my-7 z-10 absolute w-full text-xl '
      style={{ fontFamily: "Montserrat" }}
    >
      <div className='flex justify-between items-center max-container gap-16 '>
        <a href='#link'>
          <img src={headerLogo} height={200} width={120} />
        </a>
        <ul className='flex flex-1 justify-center align-items gap-16 font-medium max-lg:hidden montserrat leading-normal text-gray-400 '>
          {navLinks.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className='mr-24'>
          <span className='font-medium max-lg:hidden leading-normal'>
            Sign in / Explore now
          </span>
        </div>
      </div>
    </header>
  );
};

export default Nav;
