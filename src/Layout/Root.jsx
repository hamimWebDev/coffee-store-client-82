import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "../Components/CoffeeCard/CoffeeCard";
import { PiCoffeeFill } from "react-icons/pi";

const Root = () => {
  const allCoffee = useLoaderData();
  return (
    <div className="bg-zinc-100">
      <p className="text-center pt-10 text-black text-xl">
        --- Sip & Savor ---
      </p>
      <h2 className="text-center pt-5 pb-5 text-[#6F4E37] shadow-text text-4xl font-bold italic">
        Our Popular Products: {allCoffee.length}
      </h2>
      <Link to="/addCoffee" className="flex justify-center items-center">
        <button className="flex items-center bg-orange-500 p-2 text-lg text-white font-semibold rounded-lg">
          <p className="mr-1">Add Coffee</p>
          <PiCoffeeFill />
        </button>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5 pb-10">
        {allCoffee.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Root;
