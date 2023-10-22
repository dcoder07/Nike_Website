import React from "react";
import footlogo from "../assets/images/footer-logo.svg";
import { facebook, instagram, twitter, copyrightSign } from "../assets/icons";
import FootCard from "../components/FootCard";
import { footerLinks } from "../constants";
const Footer = () => {
  return (
    <footer className='w-full bg-black mx-auto max-w-[1440px] text-white'>
      <div className='flex max-xl:flex-col gap-10 px-8 sm:px-16 py-24'>
        <div className='basis-1/3 p-5'>
          <img
            src={footlogo}
            height={46}
            width={150}
            alt='nike-footer'
            className='mb-5'
          />
          <p className=' text-lg text-[#CCCCCC]'>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className='flex gap-5 mt-5'>
            <img
              alt='social-media-logo'
              className='bg-white rounded-full h-12 p-2'
              src={facebook}
            />
            <img
              alt='social-media-logo'
              className='bg-white rounded-full  h-12 p-2'
              src={instagram}
            />
            <img
              alt='social-media-logo'
              className='bg-white rounded-full h-12 p-2'
              src={twitter}
            />
          </div>
        </div>
        <div className='xl:flex grid md:grid-cols-2 w-full gap-8 md:gap-32 basis-2/3'>
          {footerLinks.map((foot, index) => (
            <FootCard key={index} heading={foot.title} names={foot.links} />
          ))}
        </div>
      </div>
      <div className='flex max-sm:flex-col max-sm:gap-2 justify-between m-5 p-5'>
        <p className='flex  gap-2'>
          <img src={copyrightSign} alt='copy-right' />
          Copyright. All rights reserved.
        </p>
        <p>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
