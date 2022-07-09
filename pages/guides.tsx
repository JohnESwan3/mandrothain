import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Guides/Header";

const Guides: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mandrothain | Guides</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
};

export default Guides;
