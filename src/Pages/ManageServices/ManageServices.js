import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/services`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        }
      });
  };
  return (
    <div>
      <h2>Manage Services</h2>
      {services.map((service) => (
        <div className="my-2" key={service._id}>
          <span className="me-2">{service.Name}</span>
          <button
            onClick={() => handleDelete(service._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
