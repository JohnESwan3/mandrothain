import React from "react";
import Header from "./Header";
import Image from "next/image";

const Content = () => {
  return (
    <section className="section-template rounded-div glow-main">
      <div className="section-template grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 gap-8">
        {/*Sanity*/}
        <div className="article-card group">
          <Image
            layout="responsive"
            blurDataURL="/banner.webp"
            width={350}
            height={240}
            quality={75}
            src="/banner.webp"
            alt="post"
            className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
          />
          <div className="flex justify-between p-5">
            <div>
              <p className="text-lg text-secondary font-semibold">Article</p>
            </div>
          </div>
        </div>
        {/*Sanity*/}
        <div className="article-card group">
          <Image
            layout="responsive"
            blurDataURL="/banner.webp"
            width={350}
            height={240}
            quality={75}
            src="/banner.webp"
            alt="post"
            className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
          />
          <div className="flex justify-between p-5">
            <div>
              <p className="text-lg text-secondary font-semibold">Article</p>
            </div>
          </div>
        </div>
        {/*Sanity*/}
        <div className="article-card group">
          <Image
            layout="responsive"
            blurDataURL="/banner.webp"
            width={350}
            height={240}
            quality={75}
            src="/banner.webp"
            alt="post"
            className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
          />
          <div className="flex justify-between p-5">
            <div>
              <p className="text-lg text-secondary font-semibold">Article</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
