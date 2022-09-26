import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, TextField, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useStyles } from '../styles/styles'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import Recipes from './Recipes'
import SeasonalProduct from './SeasonalProduct'
import {
  dietarySelect,
  dietaryRemove,
  fetchRecipes,
  fetchSeason,
} from '../actions'

export default function SearchRecipe() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.loading)

  const [ingredient, setIngredient] = useState('')
  const [season, setSeason] = useState('')

  const classes = useStyles()

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(fetchRecipes(ingredient))
    e.target.reset()
  }

  const handleDietary = (e) => {
    if (e.target.checked) {
      dispatch(dietarySelect(e.target.name))
    } else {
      dispatch(dietaryRemove(e.target.name))
    }
  }

  const handleSeason = (e) => {
    setSeason(e.target.value)
    dispatch(fetchSeason(e.target.value))
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

      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <FormControl fullWidth>
          <InputLabel>Season</InputLabel>
          <Select
            onChange={handleSeason}
            value={season}
            label="Season"
            size="small"
            sx={{ m: 1, width: '20ch' }}
          >
            <MenuItem value="summer">summer</MenuItem>
            <MenuItem value="autumn">autumn</MenuItem>
            <MenuItem value="winter">winter</MenuItem>
            <MenuItem value="spring">spring</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <FormGroup onChange={handleDietary}>
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

      <SeasonalProduct />
      <Recipes />
    </Box>
  )
}
