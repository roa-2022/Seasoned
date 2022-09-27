import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, TextField, IconButton, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
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
        <Box sx={{
          display: 'flex', 
          alignItems: 'flex-end',
          flexDirection: "row",
          justifyContent: "center",
          }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <FormControl>
              <InputLabel id="season-label">Season</InputLabel>
              <Select
                id="season"
                labelId="season-label"
                justifycontent="flex-end"
                onChange={handleSeason}
                value={season}
                variant="outlined"
                label="Season"
                size="small"
                sx={{ m: 1, width: '12ch' }}
              >
                <MenuItem value="summer">Summer</MenuItem>
                <MenuItem value="autumn">Autumn</MenuItem>
                <MenuItem value="winter">Winter</MenuItem>
                <MenuItem value="spring">Spring</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TextField
            justifycontent="flex-end"
            onChange={(e) => {
              setIngredient(e.target.value)
            }}
            label="Search"
            variant="outlined"
            color="primary"
            placeholder="eg, potato"
            size="small"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit" aria-label="search" sx={{ p: '' }}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Box>
      </form>

      

      <FormGroup sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        fontSize: "0.8em",
        padding: "10px"
        
      }} size="small"
      onChange={handleDietary}>
        <FormControlLabel 
          control={<Checkbox />}
          label="Vegan" 
          name="Vegan" 
        />
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
        <img width={"100%"}
          src="https://cdn.dribbble.com/users/393062/screenshots/14492170/media/67f661f7f825b62980571026e1280675.gif"
          alt="loading gif"
        />
      )}

      <SeasonalProduct />
      <Recipes />
    </Box>
  )
}
