import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TextField, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import Recipes from './Recipes'
import { fetchRecipes } from '../actions'

export default function SearchRecipe() {
  const dispatch = useDispatch()
  const [ingredient, setIngredient] = useState([])  

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(fetchRecipes(ingredient))
    e.target.reset()
  }

  return (
    <div>
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
        <IconButton type="submit" aria-label="serach">
          <SearchIcon style={{ fill: 'blue' }} />
        </IconButton>
      </form>
      <Recipes />
    </div>
  )
}
