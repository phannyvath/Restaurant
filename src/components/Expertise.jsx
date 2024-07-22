import React from "react";
import { CUSINES } from "../constants";

const Expertise = () => {
  return (
    <section id="expertise">
      <h2 className="my-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Our Expertise
      </h2>
      <div className="container mx-auto px-4">
        {CUSINES.map((cusine, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center border-b-4 border-dotted border-neutral-700/40 py-4 lg:py-2"
          >
            <div className="flex-shrink-0 pr-8 text-2xl mb-4 lg:mb-0">
              {cusine.number}
            </div>
            <div className="w-full lg:w-1/3 flex-shrink-0 mb-4 lg:mb-0">
              <img
                src={cusine.image}
                alt={cusine.title}
                className="w-full h-auto rounded-3xl"
              />
            </div>
            <div className="pl-0 lg:pl-8 text-center lg:text-left">
              <h3 className="text-2xl uppercase tracking-tighter text-rose-300">
                {cusine.title}
              </h3>
              <p className="mt-4 text-lg tracking-tighter">
                {cusine.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
