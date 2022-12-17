import React from "react";
import { TestimonialArr, TestimonialType } from "../../Constant/TestimonialCard";

const Testimonial = () => {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-col mx-auto max-w-xl items-center">
          <h2
            className="text-[35px] uppercase"
            style={{
              fontWeight: "bold",
              lineHeight: "35px",
              fontFamily: "Kanit, sans-serif",
              color: "rgb(1, 29, 37)",
            }}
          >
            founders for this project
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3">
          {TestimonialArr?.map((testimonial:TestimonialType) => (
            <div>
              <img
                src={testimonial.image}
                className="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
              />

              <blockquote className="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
                <p className="text-lg font-bold text-gray-700">{testimonial.name}</p>
                <p className="mt-1 text-xs font-medium text-gray-500">
                  {testimonial.short_desc}
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  {testimonial.long_desc}
                </p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
