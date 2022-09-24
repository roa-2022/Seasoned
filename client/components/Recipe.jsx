import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'
import { pink } from '@mui/material/colors'

export default function Recipe() {
  const { id } = useParams()
  const recipes = useSelector((state) => state.recipes)
  const recipe = recipes[id]

  const { label, image, ingredients, healthLabels, url } = recipe.recipe

  const dietary = healthLabels.filter((word) => {
    return word === 'Vegan' || word === 'Vegetarian' || word === 'Gluten-Free'
  })

  return (
    <div>
      <h3>{label}</h3>
      <img src={image} alt={label} />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              sx={{
                color: pink[800],
                '&.Mui-checked': {
                  color: pink[600],
                },
              }}
            />
          }
          label="Add to Favourite"
        />
      </FormGroup>
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
