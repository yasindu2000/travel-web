"use client";

import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  date: string;
  title: string;
};

function NewsCard({ date, image, title }:Props) {
  return (
    <div className="">
    <div className="h-[300px]">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    <h1 className="mt-6 text-lg text-gray-950 font-semibold hover:text-blue-900 transition-all duration-200 cursor-pointer">{title}</h1>
    <p className="text-sm text-gray-600 mt-3">{date}</p>
    </div>
  );
}

export default NewsCard;
