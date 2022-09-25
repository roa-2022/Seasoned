import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, TextField, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useStyles } from '../styles/styles'

import Recipes from './Recipes'
import { fetchRecipes } from '../actions'

export default function SearchRecipe() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.loading)

  const [ingredient, setIngredient] = useState([])

  const classes = useStyles()

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(fetchRecipes(ingredient))
    e.target.reset()
  }

  return (
    <Box>
      <form onSubmit={handleSearch}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <TextField
            justify="flex-end"
            className={classes.searchBar}
            onChange={(e) => {
              setIngredient(e.target.value)
            }}
            label="Search for recipes"
            variant="outlined"
            color="primary"
            placeholder="What ingredients do you have?"
            size="small"
            sx={{ m: 1, width: '50ch' }}
          />
          <IconButton type="submit" aria-label="search" sx={{ p: '10px' }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </form>
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
