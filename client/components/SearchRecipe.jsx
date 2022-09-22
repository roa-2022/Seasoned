import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TextField, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { fetchRecipes } from '../actions'

export default function SearchRecipe() {
  const dispatch = useDispatch()
  const [ingredient, setIngredient] = useState([])
  // const [results, setResults] = useState([])



  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(fetchRecipes(ingredient))
    e.target.reset()
  }

  return (
    <>
      <div>
        <form onSubmit={handleSearch}>
          <TextField
            onChange={(e) => {
              setIngredient(e.target.value)
            }}
            label="Search"
            variant="outlined"
            color="primary"
            placeholder="Search for a recipe..."
            size="small"
          />
          <IconButton type="submit" aria-label="serach">
            <SearchIcon style={{ fill: 'blue' }} />
          </IconButton>
        </form>
      </div>
    </>
  )
}
