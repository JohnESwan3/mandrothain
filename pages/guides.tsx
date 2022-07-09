import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Content from "../components/Guides/Content";

const Guides: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mandrothain | Guides</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content />
    </div>
  );
};

export default Guides;
