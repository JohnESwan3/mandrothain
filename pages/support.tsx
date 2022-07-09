import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Support/Header";
import Banner from "../components/Support/Banner";

const Support: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mandrothain | Support</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Header />
    </div>
  );
};

export default Support;
