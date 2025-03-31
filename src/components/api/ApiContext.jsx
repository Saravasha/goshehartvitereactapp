import React, { createContext, useState } from "react";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [contextData, setContextData] = useState(null);

  return (
    <ApiContext.Provider value={{ contextData, setContextData }}>
      {children}
    </ApiContext.Provider>
  );
};

export { ApiProvider, ApiContext };
