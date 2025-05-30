import { useEffect, useState } from "react";

const useEnv = () => {
  const [environment, setEnvironment] = useState([]);

  // Environments
  useEffect(() => {
    function GetEnvironment() {
      setEnvironment(import.meta.env.MODE);
    }
    GetEnvironment();
  }, []);

  return { environment };
};

export default useEnv;
