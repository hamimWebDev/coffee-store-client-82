import React from "react";
import { IoMdEye } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, supplier, category, chef, Price, details, photo } = coffee;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="w-[98%] mx-auto">
      <div className="card card-side bg-slate-200 shadow-xl grid grid-cols-6">
        <figure className="col-span-2">
          <img className="h-60" src={photo} />
        </figure>
        <div className="card-body col-span-3 text-black">
          <h2 className="flex  text-lg font-semibold">
            Name: <p className="ml-2 text-gray-600">{name}</p>
          </h2>
          <h2 className="flex text-lg font-semibold">
            Chef: <p className="ml-2 text-gray-600">{chef}</p>
          </h2>
          <h2 className="flex text-lg font-semibold">
            Price: <p className="ml-2 text-gray-600">{Price}tk</p>
          </h2>
          <h2 className="flex text-lg font-semibold">
            Supplier: <p className="ml-2 text-gray-600">{supplier}tk</p>
          </h2>
          <h2 className="flex text-lg font-semibold">
            Category: <p className="ml-2 text-gray-600">{category}tk</p>
          </h2>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <div className="grid grid-cols-1">
            <button className="bg-[#6F4E37] p-3 rounded-lg mb-3">
              <IoMdEye className="text-xl text-white" />
            </button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="bg-gray-800 p-3 rounded-lg mb-3">
                <FaPencilAlt className="text-xl text-white" />
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="bg-red-800 p-3 rounded-lg mb-3"
            >
              <MdDelete className="text-xl text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
