import React, { useState } from "react";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import ComingSoon from "./components/ComingSoon.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Main from "./components/layout/Main.jsx";
import { AnimatePresence } from "framer-motion";
import { ApiProvider } from "./components/api/ApiContext.jsx";

import ArtGallery from "./components/features/Gallery/ArtGallery.jsx";
import useApi from "./components/api/useApi.jsx";
import { SocialMedia } from "./components/layout/SocialMedia.jsx";

import { useData } from "./components/api/ApiContext.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false); // Track modal visibility
  const { isLoading } = useData();
  // console.log("App environment = ", `${import.meta.env.MODE}`);
  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div
            key="main"
            className="bg-gradient-to-r from-green-50 to-amber-50"
          >
            <Header />
            <Navbar isModalVisible={isModalVisible} />
            <ComingSoon />

            <Main />

            <ArtGallery
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
            />
            <SocialMedia />
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
