import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const SideContext = createContext();
export function SideProv({ children }) {
  const [loading, setLoading] = useState();
  const [errors, setErrors] = useState();

  return (
    <SideContext.Provider value={{ loading, setLoading, errors, setErrors }}>
      {children}
    </SideContext.Provider>
  );
}
export const useSideContext = () => useContext(SideContext);
