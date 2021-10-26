/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

const Booking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/services/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
    fetch(url);
  }, []);
  return (
    <div>
      <h2 className="mt-3">Details of : {service?.Name}</h2>
      <h2 className="mt-3 display-6 text-primary">
        This is booking: {serviceId}
      </h2>
    </div>
  );
};

export default Booking;
