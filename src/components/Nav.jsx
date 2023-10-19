import React from "react";
import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants/index";

const Nav = () => {
  return (
    <header className='padding-x py-8 z-10 absolute w-full text-xl '>
      <div className='flex justify-between items-center max-conatainer '>
        <a href='#link'>
          <img src={headerLogo} height={250} width={150} />
        </a>
        <ul className='flex flex-1 justify-center align-items gap-8 xl:gap-16 font-bold max-lg:hidden montserrat leading-normal text-gray-600 '>
          {navLinks.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className='relative right-0'>
          <button className='font-medium max-lg:hidden leading-normal'>
            <a href='#signIn'>Sign in </a>
            <span> / </span>
            <a href='exploreNow'>Explore now </a>
          </button>
        </div>
        <div className='relative right-0 cursor-pointer lg:hidden'>
          <img src={hamburger} alt='hamburger' height='25' width='25' />
        </div>
      </div>
    </header>
  );
};

export default Nav;
