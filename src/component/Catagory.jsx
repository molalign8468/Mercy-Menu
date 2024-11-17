import React from "react";
import { Catgory } from "../data";

const Catagory = ({ filterItems }) => {
  return (
    <>
      <section className="w-full grid grid-cols-4 place-items-center  lg:mx-auto  gap-y-5 gap-x-2 mt-10 mb-5 scroll-x lg:flex lg:justify-items-center lg:justify-center ">
        {Catgory.map((itm, index) => {
          return (
            <div
              className="text-gray-900 hover:text-white w-20 lg:w-24 bg-yellow-950  shadow-md rounded-full duration-500 hover:scale-105 hover:shadow-gray-900  h-12 hover:h-16"
              key={index}
              onClick={() => filterItems(itm.name)}
            >
              <a href="#">
                <img
                  src={itm.img}
                  alt={itm.img}
                  className="h-10 w-40 object-cover rounded-full"
                />
                <div className="px-3 py-1 w-28 text-center ">
                  <span className=" mr-3 uppercase text-xs">{itm.name}</span>
                </div>
              </a>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Catagory;
