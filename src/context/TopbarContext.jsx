import { createContext, useContext, useState, useEffect } from "react";

const TopbarContext = createContext();

export const TopbarProvider = ({ children }) => {
  const [topbarTitle, setTopbarTitle] = useState("Dashboard");
  
 


  return (
    <TopbarContext.Provider value={{topbarTitle,setTopbarTitle }}>
      {children}
    </TopbarContext.Provider>
  );
};

export const useTopbarContext = () => useContext(TopbarContext);
