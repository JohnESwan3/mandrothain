import type { NextPage } from "next";
import Head from "next/head";
import MainBanner from "../components/Home/MainBanner";
import SocialCards from "../components/Home/SocialCards";
import Content from "../components/Home/Content";
import TwitchStream from "../components/Home/TwitchStream";
import YTFeatured from "../components/Home/YTFeatured";

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
      <YTFeatured />
    </div>
  );
};

export default Home;
