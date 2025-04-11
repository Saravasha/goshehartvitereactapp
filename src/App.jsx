import React, { useContext, useEffect } from "react";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import ComingSoon from "./components/ComingSoon.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Main from "./components/layout/Main.jsx";

import { ApiProvider } from "./components/api/ApiContext.jsx";

import ArtGallery from "./components/features/Gallery/ArtGallery.jsx";
import GetRandomAsset from "./components/features/GetRandomAsset.jsx";

import useApi from "./components/api/useApi.jsx";

function App() {
  const { isLoading } = useApi();
  // console.log("App environment = ", `${import.meta.env.MODE}`);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <ComingSoon />
          <Header />
          <Navbar />

          <Main></Main>

          <ArtGallery />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
