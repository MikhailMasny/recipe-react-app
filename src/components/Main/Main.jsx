import React, { useEffect, useState } from "react";
import {
  API_URL,
  API_PATH_SEARCH,
  API_QUERY,
  API_APP_ID,
  API_APP_KEY,
} from "../../constants/constants";
import { useSearchContext } from "../../contexts/SearchContext";
import "./main.css";
import Recipe from "../Recipe/Recipe";

export default function Main() {
  const [recipes, setRecipes] = useState([]);
  const searchContext = useSearchContext();

  useEffect(() => {
    if (searchContext.text !== "") {
      getRecipes(searchContext.text);
    }
  }, [searchContext]);

  const getRecipes = async (text) => {
    const url =
      API_URL +
      API_PATH_SEARCH +
      API_QUERY +
      text +
      API_APP_ID +
      process.env.REACT_APP_EDAMAM_ID +
      API_APP_KEY +
      process.env.REACT_APP_EDAMAM_API_KEY;

    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className="recipes">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.url}
          title={recipe.recipe.label}
          ingredients={recipe.recipe.ingredientLines}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          link={recipe.recipe.url}
        />
      ))}
    </div>
  );
}
