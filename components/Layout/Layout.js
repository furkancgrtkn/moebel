import React from "react";
import Navbar from "../Navbar";
import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Moebel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
