import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const RegContext = createContext();
export function RegProv({ children }) {
  const [reg, setReg] = useState();

  return (
    <RegContext.Provider value={{ reg, setReg }}>
      {children}
    </RegContext.Provider>
  );
}
export const useReg = () => useContext(RegContext);
