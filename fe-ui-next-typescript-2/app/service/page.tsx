"use client";
import { getServices } from "@/api/exampleApi";
import { Service } from "@/interface/service.interface";
import { useEffect, useState } from "react";

const ServicePage = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    getServices().then(setServices).catch(console.error);
  }, []);
  return (
    <div>
      <h1>Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <strong>{service.name}</strong> - {service.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicePage;
