import React, { useContext, createContext } from "react";
import useApi from "./useApi";
import useEnv from "../hooks/useEnv";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const { assets, pages, colors, directApi, isLoading } = useApi();
  const { environment } = useEnv();
  if (environment == "development" || environment == "staging")
    // Dev or Staging => log
    console.log(
      { Environment: environment },
      { Assets: assets },
      { Pages: pages },
      { Colors: colors },
      { directApi: directApi },
      { isLoading: isLoading }
    );
  return (
    <ApiContext.Provider
      value={{ environment, assets, pages, colors, directApi, isLoading }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useData = () => useContext(ApiContext);
