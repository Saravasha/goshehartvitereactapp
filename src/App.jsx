import React, { useState } from "react";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import ComingSoon from "./components/ComingSoon.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Main from "./components/layout/Main.jsx";

import { ApiProvider } from "./components/api/ApiContext.jsx";

import ArtGallery from "./components/features/Gallery/ArtGallery.jsx";
import useApi from "./components/api/useApi.jsx";
import { SocialMedia } from "./components/layout/SocialMedia.jsx";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false); // Track modal visibility
  const { assets, pages, directApi, isLoading } = useApi();
  // console.log("App environment = ", `${import.meta.env.MODE}`);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <ComingSoon />
          <Header />
          <Navbar pages={pages} isModalVisible={isModalVisible} />

          <Main
            assets={assets}
            pages={pages}
            directApi={directApi}
            isLoading={isLoading}
          ></Main>

          <ArtGallery
            assets={assets}
            directApi={directApi}
            isLoading={isLoading}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
          <SocialMedia />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
