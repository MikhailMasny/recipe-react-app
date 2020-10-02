import React from "react";
import "./recipe.css";
import calorie from "../../assets/images/calorie.png";
import { shortenIt, roundIt } from "../../services/common";

function Recipe(props) {
  const shortenTitle = shortenIt(props.title);
  const roundCalories = roundIt(props.calories);

  return (
    <div className="recipe recipe__bottom-indent">
      <div className="recipe__image">
        <img className="recipe__image-size" src={props.image} alt="" />
      </div>
      <div className="recipe__content">
        <div className="recipe__title recipe__title-indent">
          <a
            className="recipe__link"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            title={props.title}
          >
            {shortenTitle}
          </a>
        </div>
        <div className="recipe__text recipe__text-indent">
          {props.ingredients.join(", ")}
        </div>
        <div className="recipe__actions">
          <div className="calories">
            <div className="calories__icon">
              <img src={calorie} alt="" />
            </div>
            <div className="calories__count">{roundCalories} calories</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
