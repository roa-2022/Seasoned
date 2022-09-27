import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'
import { pink } from '@mui/material/colors'
import { Typography } from '@mui/material'

import { fetchRecipes } from '../actions'

export default function Recipe() {
  const { id, ingredient } = useParams()
  const loading = useSelector((state) => state.loading)
  const dispatch = useDispatch()
  const recipes = useSelector((state) => state.recipes)
  const recipe = recipes[id]

  const { label, image, ingredients, healthLabels, url } = recipe
    ? recipe.recipe
    : {}

  const dietary = healthLabels?.filter((word) => {
    return word === 'Vegan' || word === 'Vegetarian' || word === 'Gluten-Free'
  })

  useEffect(() => dispatch(fetchRecipes(ingredient)), [])

  return (
    <div>
      {loading && (
        <img
          width={'100%'}
          src="https://cdn.dribbble.com/users/393062/screenshots/14492170/media/67f661f7f825b62980571026e1280675.gif"
          alt="loading gif"
        />
      )}
      {label && (
        <>
          <Typography variant="h3">{label}</Typography>
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
        </>
      )}

      <Typography>
        <strong>{dietary?.map((e) => e + ' ')} </strong>
      </Typography>
      <div>
        {ingredients && (
          <>
            <Typography variant="h4">Ingredients</Typography>
            <ul>
              {ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient.text}</li>
              ))}
            </ul>

            <h4>Instructions</h4>
            <a href={url}>Click this link</a>
          </>
        )}
      </div>
    </div>
  )
}
