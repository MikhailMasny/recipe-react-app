import React, { useState, useContext, createContext } from "react";

const SearchContext = createContext();

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [text, setText] = useState("");

  return (
    <SearchContext.Provider value={{ text, setText }}>
      {children}
    </SearchContext.Provider>
  );
};
