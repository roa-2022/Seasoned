import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Recipe() {
  const { id } = useParams()
  const recipes = useSelector((state) => state.recipes)
  const recipe = recipes[id]

  const { label, images, ingredients, healthLabels, url } = recipe.recipe

  const largeImage = images.LARGE?.url
  const regularImage = images.REGULAR.url

  const dietary = healthLabels.filter((word) => {
    return word === 'Vegan' || word === 'Vegetarian' || word === 'Gluten-Free'
  })

  return (
    <div>
      <h3>{label}</h3>
      <img src={largeImage || regularImage} alt="recipe" />
      <p>
        <strong>{dietary.map((e) => e + ' ')} </strong>
      </p>
      <div>
        <h4>Ingredients</h4>
        <ul>
          {ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient.text}</li>
          ))}
        </ul>
        <h4>Instructions</h4>
        <a href={url}>Click this link</a>
      </div>
    </div>
  )
}
