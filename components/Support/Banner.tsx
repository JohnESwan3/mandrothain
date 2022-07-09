import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto py-4">
      <Image
        src="/banner.webp"
        width="2560px"
        height="900px"
        className="xl:rounded-2xl"
        priority
        placeholder="blur"
        blurDataURL="/banner.webp"
        alt="Mandrothain Banner"
      />
    </div>
  );
};

export default Banner;
