import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Recipe() {
  const { id } = useParams()
  const recipes = useSelector((state) => state.recipes)
  const recipe = recipes[id]

  const label = recipe.recipe.label
  const largeImage = recipe.recipe.images.LARGE?.url
  const regularImage = recipe.recipe.images.REGULAR.url
  const ingredientsArr = recipe.recipe.ingredients

  const dietaryArr = recipe.recipe.healthLabels
  const selectiveDietary = dietaryArr.filter((word) => {
    return word === 'Vegan' || word === 'Vegetarian' || word === 'Gluten-Free'
  })

  return (
    <div>
      <h3>{label ? label : 'Hello World'}</h3>
      <img src={largeImage ? largeImage : regularImage} alt="recipe" />
      <p>
        <strong>{selectiveDietary.map((e) => e + ' ')} </strong>
      </p>
      <div>
        <h4>Ingredients</h4>
        <ul>
          {ingredientsArr.map((ingredient, idx) => (
            <li key={idx}>{ingredient.text}</li>
          ))}
        </ul>
        <h4>Instructions</h4>
        <a href={recipe.recipe.url}>Click this link</a>
      </div>
    </div>
  )
}
