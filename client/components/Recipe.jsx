import React, { useState } from 'react'

import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'
import { pink } from '@mui/material/colors'
import { Typography } from '@mui/material'
import { postFavouriteProduct } from '../apis/produce'

export default function Recipe() {
  const { id } = useParams()
  const recipes = useSelector((state) => state.recipes)
  const user = useSelector((state) => state.loggedInUser)
  const recipe = recipes[id]
  const [checked, setChecked] = useState(false)

  // Function to take the recipe
  // Save it to the database
  // As a favorite
  // send { auth0_id: user.auth0_id, recipe: recipe }
  // to the backend
  const handleFavorite = async (e) => {
    console.log('You have picked this as a favourite')
    console.log(user)
    setChecked(e.target.checked)
    console.log(checked)
    const favourite = await postFavouriteProduct(recipe, user.auth0_id)
    console.log(favourite)
  }

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
              checked={checked}
              onChange={handleFavorite}
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
        <Typography variant="h4">Ingredients</Typography>
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
