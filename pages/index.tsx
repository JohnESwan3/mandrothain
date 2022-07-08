import type { NextPage } from "next";
import Head from "next/head";
import MainBanner from "../components/MainBanner";
import SocialCards from "../components/SocialCards";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Mandrothain | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainBanner />
      <SocialCards />
    </div>
  );
};

export default Home;
