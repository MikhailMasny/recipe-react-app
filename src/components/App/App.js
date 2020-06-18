import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';
import './../App/App.css'

function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`);
    const data = await response.json();
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
    setSearch('');
  };

  return (
    <div className="wrapper">
      <div className="header header__top-indent">
        <h1 className="header__title">Recipes search engine</h1>
      </div>
      <form onSubmit={getSearch} className="search search__margin-indent">
        <input className="search__input search__input-indent" type="search" value={search} onChange={updateSearch} placeholder="What will we look for?" />
        <button className="search__button" type="submit">Search</button>
      </form>
      <div className="app">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.url}
            title={recipe.recipe.label}
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
