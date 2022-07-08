import type { NextPage } from "next";
import Head from "next/head";
import MainBanner from "../components/MainBanner";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainBanner />
    </div>
  );
};

export default Home;
