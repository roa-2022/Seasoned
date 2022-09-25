import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, TextField, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import Recipes from './Recipes'
import { dietarySelect, dietaryRemove, fetchRecipes } from '../actions'

export default function SearchRecipe() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.loading)

  const [ingredient, setIngredient] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(fetchRecipes(ingredient))
    e.target.reset()
  }

  const handleChange = (e) => {
    if (e.target.checked) {
      dispatch(dietarySelect(e.target.name))
    } else {
      dispatch(dietaryRemove(e.target.name))
    }
  }

  return (
    <Box>
      <form onSubmit={handleSearch}>
        <TextField
          onChange={(e) => {
            setIngredient(e.target.value)
          }}
          label="Search for recipes"
          variant="outlined"
          color="primary"
          placeholder="What ingredients do you have?"
          size="small"
          style={{ marginBottom: 20, width: 345 }}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: 'blue' }} />
        </IconButton>
      </form>

      <FormGroup onChange={handleChange}>
        <FormControlLabel control={<Checkbox />} label="Vegan" name="Vegan" />
        <FormControlLabel
          control={<Checkbox />}
          label="Vegetarian"
          name="Vegetarian"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Gluten-Free"
          name="Gluten-Free"
        />
      </FormGroup>

      {loading && (
        <img
          src="https://cdn.dribbble.com/users/393062/screenshots/14492170/media/67f661f7f825b62980571026e1280675.gif"
          alt="loading gif"
        />
      )}

      <Recipes />
    </Box>
  )
}
