import React, { createContext, useContext, useState } from "react";

export const SelectedProjectContext = createContext();
export const SelectedProjectProvider = ({ children }) => {
  const { proejects, setProjects } = useState("INBOX");

  return (
    <SelectedProjectContext.Provider value={{ proejects, setProjects }}>
      {children}
    </SelectedProjectContext.Provider>
  );
};

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);
