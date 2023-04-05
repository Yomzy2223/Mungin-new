import React, { useEffect, useState } from "react";
import Hero from "../components/Landing/Hero";
import MiniCard from "../components/Landing/MiniCard";
import Navbar from "../components/Landing/Navbar";
import Mission from "../components/Landing/mission";
// import About from "../components/Landing/About";
// import Advert from "../components/Landing/Advert";
import Footer from "../components/Landing/Footer";
// import UserService from "../services/user.service";

import WorkProgress from "../components/Landing/WorkingProgress";
import styled from "styled-components";
import Head from "next/head";
// import Articles from "./components/Landing page/Articles";

const App = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/noto-sans-batak"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/qumpellkano12"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/g-gelembung"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/cutest-things"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik+Bubbles&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/montserrat"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/montserrat-alternates"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <AppContainer>
        <Hero />
        <WorkProgress />
        {/* <MiniCard /> */}
        <Mission />
        {/* <Articles /> */}
        {/* <About /> */}
        {/* <Advert /> */}
      </AppContainer>
      <Footer />
    </>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-inline: clamp(20px, 6vw, 100px);
  gap: 60px;
  margin-bottom: 150px;
`;
