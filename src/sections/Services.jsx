import React from "react";
import { services } from "../constants/index.js";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className='xl:flex grid lg:grid-cols-2 grid-cols-1 gap-10 max-container'>
      {services.map((service, index) => {
        return (
          <ServiceCard
            key={index}
            imageIcon={service.imgURL}
            content={service.subtext}
            label={service.label}
          />
        );
      })}
    </section>
  );
};

export default Services;
