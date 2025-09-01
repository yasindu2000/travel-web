import React from "react";
import { FaStar } from "react-icons/fa";
import ReviewSlider from "./ReviewSlider";

function Review() {
  return (
    <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        {/* text content  */}
        <div className="">
          <h1 className="text-2xl font-semibold text-white">
            What Our Customers Are Saying Us?
          </h1>
          <p className="mt-6 text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            eos ducimus quia id modi? Culpa.
          </p>
          {/* rating  */}
          <div className="mt-6 flex  items-center space-x-6">
            <div className="">
            <p className="text-2xl font-bold text-white">4.88</p>
            <p className="text-white mb-2">Overall Rating</p>
            <div className="flex items-center">
              <FaStar className="text-white" />
              <FaStar className="text-white" />
              <FaStar className="text-white" />
              <FaStar className="text-white" />
              <FaStar className="text-white" />
            </div>
            </div>
          </div>
        </div>
        {/* slider  */}
        <div className="overflow-hidden">
            <ReviewSlider/>
        </div>
      </div>
    </div>
  );
}

export default Review;
