import React from "react";
import PageBuilder from "../features/Pages/PageBuilder";
import ScrollToTopButton from "../../components/features/ScrollToTopButton.jsx";

export default function Main({ isModalVisible }) {
  return (
    <>
      <PageBuilder />
      <ScrollToTopButton isVisible={!isModalVisible}></ScrollToTopButton>
    </>
  );
}
