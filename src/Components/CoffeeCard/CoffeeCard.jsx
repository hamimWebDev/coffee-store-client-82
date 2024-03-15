import React from "react";

const CoffeeCard = ({ coffee }) => {
  const { name, supplier, category, chef, Price, details, photo } = coffee;
  console.log(coffee);
  return (
    <div className="w-[98%] mx-auto">
      <div className="card card-side bg-slate-200 shadow-xl">
        <figure>
          <img
            className="h-60"
            src={photo}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
