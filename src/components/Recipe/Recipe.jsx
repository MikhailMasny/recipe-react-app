import React from "react";
import "./recipe.css";
import calorie from "../../assets/images/calorie.png";

function Recipe(props) {
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
          >
            {props.title}
          </a>
        </div>
        <div className="recipe__text recipe__text-indent">
          some text here
        </div>
        <div className="recipe__actions">
          <div className="calories">
            <div className="calories__icon">
              <img src={calorie} alt="" />
            </div>
            <div className="calories__count">
              {Math.round(props.colories)} calories
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
