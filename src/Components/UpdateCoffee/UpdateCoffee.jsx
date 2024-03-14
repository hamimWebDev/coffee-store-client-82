import React from "react";

const UpdateCoffee = () => {
  return (
    <div className="flex justify-center bg-white w-full ">
      <div className="bg-slate-200 w-[70%] mt-10 mb-5">
        <div className="p-14">
          <h1 className="text-center text-4xl text-[#6F4E37] italic font-bold">
            Add New Coffee
          </h1>
          <p className="mt-5 text-center text-gray-500">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using
            <br /> Content here.
          </p>
          <form>
            <div className="grid grid-cols-2 gap-5 mt-5">
              <div>
                <div>
                  <h5 className="mb-3 mt-3 text-lg font-semibold text-gray-600">
                    Name
                  </h5>
                  <label className="input input-bordered flex items-center gap-2 bg-white">
                    <input
                      name="name"
                      type="text"
                      className="grow"
                      placeholder="Enter coffee name"
                      required
                    />
                  </label>
                </div>
                <div>
                  <h5 className="mb-3 mt-3 text-lg font-semibold text-gray-600">
                    Supplier
                  </h5>
                  <label className="input input-bordered flex items-center gap-2 bg-white">
                    <input
                      name="supplier"
                      type="text"
                      className="grow"
                      placeholder="Enter coffee supplier"
                      required
                    />
                  </label>
                </div>
                <div>
                  <h5 className="mb-3 mt-3 text-lg font-semibold text-gray-600">
                    Category
                  </h5>
                  <label className="input input-bordered flex items-center gap-2 bg-white">
                    <input
                      name="category"
                      type="text"
                      className="grow"
                      placeholder="Enter coffee category"
                      required
                    />
                  </label>
                </div>
              </div>
              <div>
                <div>
                  <h5 className="mb-3 mt-3 text-lg font-semibold text-gray-600">
                    Chef
                  </h5>
                  <label className="input input-bordered flex items-center gap-2 bg-white">
                    <input
                      name="chef"
                      type="text"
                      className="grow"
                      placeholder="Enter coffee chef"
                      required
                    />
                  </label>
                </div>
                <div>
                  <h5 className="mb-3 mt-3 text-lg font-semibold text-gray-600">
                    Taste
                  </h5>
                  <label className="input input-bordered flex items-center gap-2 bg-white">
                    <input
                      name="taste"
                      type="text"
                      className="grow"
                      placeholder="Enter coffee taste"
                      required
                    />
                  </label>
                </div>
                <div>
                  <h5 className="mb-3 mt-3 text-lg font-semibold text-gray-600">
                    Details
                  </h5>
                  <label className="input input-bordered flex items-center gap-2 bg-white">
                    <input
                      name="details"
                      type="text"
                      className="grow"
                      placeholder="Enter coffee details"
                      required
                    />
                  </label>
                </div>
              </div>
            </div>
            <div>
              <h5 className="mb-3 mt-3 text-lg font-semibold text-gray-600">
                Photo
              </h5>
              <label className="input input-bordered flex items-center gap-2 bg-white">
                <input
                  name="photo"
                  type="text"
                  className="grow"
                  placeholder="Enter photo URL"
                  required
                />
              </label>
            </div>
            <input
              className="bg-orange-400 w-full mt-5 text-black p-3 rounded-lg text-xl font-semibold"
              name="submit"
              type="submit"
              value="Add Coffee"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
