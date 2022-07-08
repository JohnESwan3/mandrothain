import React from "react";

const Content = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-3 my-8">
        <section className="rounded-div col-span-1 md:col-span-2">
          <h1 className="text-xl capitalize text-teal-500 dark:text-emerald-600">
            Mandrothain
          </h1>
        </section>
        <aside className=" rounded-div col-span-1">aside</aside>
      </div>
    </div>
  );
};

export default Content;
