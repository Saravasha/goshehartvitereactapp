import React, { Suspense } from "react";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import ComingSoon from "./components/ComingSoon.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Main from "./components/layout/Main.jsx";

// import PagesGetterApi from "./components/api/PagesGetterApi.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";
import ArtGallery from "./components/features/ArtGallery.jsx";
import GetRandomAsset from "./components/features/GetRandomAsset.jsx";

import "./assets/main.css";

function App() {
  console.log("App environment = ", `${import.meta.env.MODE}`);

  return (
    <>
      {/* <AssetsGetter> */}
      <Header />
      {/* <PagesGetterApi>
      </PagesGetterApi> */}
      <Navbar />
      <GetRandomAsset />
      <Sidebar>
        <ArtGallery />
      </Sidebar>
      <Main></Main>
      {/* <PageBuilder></PageBuilder> */}
      <ComingSoon />
      <Footer />
      {/* <ImagesGetter></ImagesGetter> */}

      {/* </AssetsGetter> */}
    </>
  );
}

export default App;
