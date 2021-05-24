import React from "react";
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer";
import CookieModal from "../utils/CookieModal";
import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Moebel</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, 
     user-scalable=0"
        ></meta>
        <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CookieModal />
    </>
  );
}

export default Layout;
