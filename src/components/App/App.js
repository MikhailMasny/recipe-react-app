/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Recipe from "../Recipe/Recipe";
import "./../App/App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=6018288c&app_key=e917104737f8ae249c6d3d186093c008`
    );
    const data = await response.json();
    console.log(data);
    console.log(data.hits);
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="wrapper">
      <Header />
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
      <div className="cards">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.url}
            title={recipe.recipe.label} // TODO: fix name
            ingredients={recipe.recipe.ingredientLines}
            colories={recipe.recipe.calories}
            image={recipe.recipe.image}
            link={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
