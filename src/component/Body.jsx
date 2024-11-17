import React from "react";

const Shadow = { boxShadow: "inset 0 4px 4px 10px rgba(255,255,255,0.9)" };

function Body({ items }) {
  return (
    <main>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 justify-items-center justify-center gap-y-5 gap-x-3 mt-10 mb-10 "
      >
        {items.map((itm, index) => {
          return (
            <div
              style={{
                boxShadow: "inset 0 2px 5px 2px rgba(255,255,255,0.7)",
              }}
              key={index}
              className="w-44 bg-slate-950 text-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-2xl "
            >
              <a href="#">
                <img
                  src={itm.img}
                  alt="Product"
                  className="h-28 w-44 object-cover rounded-s-full hover:rounded-xl duration-500"
                />
                <div className="px-4 py-3 w-44 flex items-center gap-7">
                  <p className="text-sm  text-white  block capitalize">
                    {itm.name}
                  </p>
                  <p className="text-sm text-white cursor-auto my-3">
                    ${itm.Price + " "} Birr
                  </p>
                </div>
              </a>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Body;
