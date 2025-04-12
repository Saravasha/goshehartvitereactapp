import React from "react";
import PageBuilder from "../features/Pages/PageBuilder";
import ScrollToTopButton from "../../components/features/ScrollToTopButton.jsx";

export default function Main({
  assets,
  pages,
  directApi,
  isLoading,
  isModalVisible,
}) {
  return (
    <>
      <PageBuilder
        assets={assets}
        pages={pages}
        directApi={directApi}
        isLoading={isLoading}
      />
      <ScrollToTopButton isVisible={isModalVisible}></ScrollToTopButton>
    </>
  );
}
