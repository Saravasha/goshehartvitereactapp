import React, { useEffect, useState, useContext, createContext } from "react";
import useApi from "./useApi";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const { assets, pages, colors, directApi, isLoading } = useApi();
  if (`${import.meta.env.MODE}` == "development")
    console.log(
      "App environment = ",
      `${import.meta.env.MODE}`,
      { Assets: assets },
      { Pages: pages },
      { Colors: colors },
      { directApi: directApi },
      { isLoading: isLoading }
    );
  return (
    <ApiContext.Provider
      value={{ assets, pages, colors, directApi, isLoading }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useData = () => useContext(ApiContext);
