import React from "react";
import "./app.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Search from "../Search/Search";
import { SearchProvider } from "../../contexts/SearchContext";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <SearchProvider>
        <Search />
        <Main />
      </SearchProvider>
    </div>
  );
}

export default App;
