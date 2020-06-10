import React from 'react';

function Recipe(props) {
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.colories}</p>
            <img src={props.image} alt=""></img>
            <p>{props.ingredients.map(ingredient => (<li>{ingredient.text}</li>))}</p>
        </div>
    )
}

export default Recipe;
