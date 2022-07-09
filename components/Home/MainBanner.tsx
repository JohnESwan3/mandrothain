import React from "react";
import Image from "next/image";

const MainBanner = () => {
  return (
    <div className="section-template">
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

export default MainBanner;
