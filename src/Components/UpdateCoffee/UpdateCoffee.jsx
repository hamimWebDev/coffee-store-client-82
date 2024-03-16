import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, supplier, category, chef, Price, details, photo } = coffee;
  return (
    
  );
};

export default UpdateCoffee;
