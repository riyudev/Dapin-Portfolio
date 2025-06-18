import React from "react";
import { servicesData } from "../helpers/ServicesData";

function Services() {
  return (
    <section id="services" className="space-y-14 pt-24">
      <header className="space-y-2">
        <h3>My Services</h3>
        <hr className="w-48" />
      </header>
      <div className="grid grid-cols-4 gap-5">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-4 rounded-lg bg-gray-800 p-5 shadow-md shadow-cyan-400"
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
