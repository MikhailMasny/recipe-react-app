import React from 'react';
import '../Recipe/Recipe.css'

function Recipe(props) {
    return(
        <div className="recipe recipe__bottom-indent">
            <div className="recipe__header">
                <div className="recipe__figure">
                    <img src={props.image} alt=""></img>
                </div>
            </div>
            <div className="recipe__body">
                <div className="recipe__title">{props.title}</div>
            </div>
            <div className="recipe__footer">
                <div className="recipe__calories">
                    <div className="recipe__icon recipe__icon-indent"></div>
                    <div className="recipe__health">{Math.round(props.colories)} calories</div>
                </div>
                <a target="_blank" rel="noopener noreferrer" href={props.link} className="recipe__link">link</a>
            </div>
        </div>
    )
}

export default Recipe;
