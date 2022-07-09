import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import NewestVid from "../components/YouTube/NewestVid";
import Header from "../components/YouTube/Header";

const Youtube: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mandrothain | YT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewestVid />
      <Header />
    </div>
  );
};

export default Youtube;
