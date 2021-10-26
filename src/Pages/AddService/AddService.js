import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";
const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/services", data).then((res) => {
      if (res.data.insertedId) {
        alert("Adding Successful");
      }
    });
    reset();
  };

  return (
    <div className="add-service">
      <h2 className="text-primary mt-3">Please Add A Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          {...register("Name", { required: true, maxLength: 20 })}
        />
        <textarea placeholder="Description" {...register("description")} />
        <input placeholder="Price" type="number" {...register("price")} />
        <input placeholder="Img URL" {...register("img")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
