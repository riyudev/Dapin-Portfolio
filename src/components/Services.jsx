import React from "react";
import { servicesData } from "../helpers/ServicesData";

function Services() {
  return (
    <section
      id="services"
      className="laptop:space-y-14 laptop:pt-24 mb-10 space-y-8 pt-20"
    >
      <header className="laptop:items-start flex flex-col items-center justify-center space-y-2">
        <h3>My Services</h3>
        <hr className="w-40" />
      </header>
      <div className="laptop:grid-cols-4 grid grid-cols-1 gap-5">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="laptop:space-y-4 laptop:p-5 flex flex-col items-center space-y-3 rounded-lg bg-gray-800 p-3 shadow-md shadow-cyan-400"
          >
            <img src={service.icon} alt={service.title} className="size-28" />
            <h4 className="text-center">{service.title}</h4>
            <p className="text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
