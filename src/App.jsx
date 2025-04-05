import React, { useContext, useEffect } from "react";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import ComingSoon from "./components/ComingSoon.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Main from "./components/layout/Main.jsx";

// import PagesGetterApi from "./components/api/PagesGetterApi.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";
import ArtGallery from "./components/features/Gallery/ArtGallery.jsx";
import ArtGallery2 from "./components/features/Gallery/ArtGallery copy.jsx";
import GetRandomAsset from "./components/features/GetRandomAsset.jsx";

// import "./assets/main.css";
import Gallery from "./components/features/Gallery/Gallery.jsx";

function App() {
  console.log("App environment = ", `${import.meta.env.MODE}`);

  return (
    <>
      <Header />
      <Navbar />
      <GetRandomAsset />
      <Sidebar>
        <ArtGallery2 />
      </Sidebar>
      <Main></Main>
      <ArtGallery />
      <ComingSoon />
      <Footer />
    </>
  );
}

export default App;
