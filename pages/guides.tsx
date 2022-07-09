import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Content from "../components/Guides/Content";
import Banner from "../components/Guides/Banner";

const Guides: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mandrothain | Guides</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Content />
    </div>
  );
};

export default Guides;
