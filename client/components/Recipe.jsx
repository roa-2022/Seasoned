import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

// TODO: access using useParams

export default function Recipe() {
  // const { label, image, url } = props.recipe.recipe
  // The second .recipe is the key within each Recipe Object

  const { id } = useParams()
  const recipes = useSelector((state) => state.recipes)
  const recipe = recipes[id]
  console.log('Specific recipe: ', recipe)
  const label = recipe.recipe.label
  const largeImage = recipe.recipe.images.LARGE?.url
  const regularImage = recipe.recipe.images.REGULAR.url

  return (
    <div>
      <h3>{/* <a href={url}>{label}</a> */}</h3>
      {/* <img src={image} alt="food" /> */}

      <h3>{label ? label : 'Hello World'}</h3>
      <img src={largeImage ? largeImage : regularImage} alt="recipe" />
      {/* <img src={regularImage} alt="recipe" /> */}
    </div>
  )
}
