import type { NextPage } from "next";
import Head from "next/head";
import MainBanner from "../components/Home/MainBanner";
import SocialCards from "../components/SocialCards";
import Content from "../components/Home/Content";
import TwitchStream from "../components/TwitchStream";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Mandrothain | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainBanner />
      <SocialCards />
      <Content />
      <TwitchStream />
    </div>
  );
};

export default Home;
