import React, { useState } from "react";
import "./search.css";
import { useSearchContext } from "../../contexts/SearchContext";

export default function Search() {
  const searchContext = useSearchContext();
  const [search, setSearch] = useState("");

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    searchContext.setText(search);
    setSearch("");
  };

  return (
    <div className="search search__margin-indent">
      <form className="search__form" onSubmit={getSearch}>
        <div className="search__title search__title-indent">
          Search for recipes
        </div>
        <input
          className="search__input"
          type="search"
          value={search}
          onChange={updateSearch}
          placeholder="What will we look for?"
        />
      </form>
    </div>
  );
}
