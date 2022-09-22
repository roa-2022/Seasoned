import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TextField, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { fetchRecipes } from '../actions'

export default function SearchRecipe() {
  const dispatch = useDispatch()

  const [ingredientSearch, setIngredientSearch] = useState('')

  const searchResults = useSelector((state) => state.recipes)
  // console.log('SEARCHREAULTS: ', searchResults)

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(fetchRecipes(ingredientSearch))
    console.log('INGREDIENTSEARCH: ', ingredientSearch)
    e.target.reset()
  }

  return (
    <>
      <div>
        <form onSubmit={handleSearch}>
          <TextField
            onChange={(e) => {
              setIngredientSearch(e.target.value)
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
        {searchResults.map((e) => (
          <>
            <div>
              <img src={e.recipe.image} />
            </div>
            <div>
              <a href={e.recipe.url}>{e.recipe.label}</a>
            </div>
          </>
        ))}
      </div>
    </>
  )
}
