import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Twitch/Header";
import LiveStream from "../components/Twitch/LiveStream";
import Chat from "../components/Twitch/Chat";
import Schedule from "../components/Twitch/Schedule";

const Twitch: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mandrothain | Twitch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LiveStream />
      <Header />
      <Chat />
      <Schedule />
    </div>
  );
};

export default Twitch;
