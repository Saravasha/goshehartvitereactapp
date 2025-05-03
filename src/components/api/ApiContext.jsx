import React, { useEffect, useState, useContext, createContext } from "react";
import useApi from "./useApi";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const { assets, pages, directApi, isLoading } = useApi();
  console.log(
    { Assets: assets },
    { Pages: pages },
    { directApi: directApi },
    { isLoading: isLoading }
  );
  return (
    <ApiContext.Provider value={{ assets, pages, directApi, isLoading }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useData = () => useContext(ApiContext);
