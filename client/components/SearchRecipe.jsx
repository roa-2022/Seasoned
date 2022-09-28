import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Autocomplete,
  Box,
  Chip,
  TextField,
  IconButton,
  InputAdornment,
  Button,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Toggle from '@mui/material/ToggleButton'
import { FilterAlt, FilterAltOff } from '@mui/icons-material'

import Recipes from './Recipes'
import SeasonalProduct from './SeasonalProduct'
import {
  // dietarySelect,
  // dietaryRemove,
  fetchRecipes,
  fetchSeason,
} from '../actions'

export default function SearchRecipe() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.loading)
  const [ingredient, setIngredient] = useState('')
  const [season, setSeason] = useState('')
  const [toggleFilters, setToggleFilters] = useState(false)
  const [dietaryForm, setDietaryForm] = useState({
    vegan: false,
    vegetarian: false,
    'gluten-free': false,
  })
  const [mealType, setMealType] = useState({
    breakfast: false,
    teatime: false,
    lunch: false,
    dinner: false,
    snack: false,
  })
  const seasonalProduce = useSelector((state) => state.seasonalProduct).map(
    (produce) => produce.name
  )

  const handleSearch = (e) => {
    e.preventDefault()

    let dietary = ''
    for (const key in dietaryForm) {
      if (dietaryForm[key]) {
        dietary += `&health=${key}`
        dietaryForm[key] = false
      }
    }

    let meal = ''
    for (const key in mealType) {
      if (mealType[key]) {
        meal += `&mealType=${key}`
        mealType[key] = false
      }
    }

    dispatch(fetchRecipes(ingredient.join('&q=') + dietary + meal))
    e.target.reset()
  }

  const handleSeason = (e) => {
    setSeason(e.target.value)
    dispatch(fetchSeason(e.target.value))
  }

  return (
    <Box>
      <form onSubmit={handleSearch}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <FormControl>
              <InputLabel id="season-label">Season</InputLabel>
              <Select
                defaultValue="summer"
                id="season"
                labelId="season-label"
                justifycontent="flex-end"
                onChange={handleSeason}
                value={season}
                variant="outlined"
                label="Season"
                size="small"
                sx={{ width: '12ch' }}
              >
                <MenuItem value="summer">Summer</MenuItem>
                <MenuItem value="autumn">Autumn</MenuItem>
                <MenuItem value="winter">Winter</MenuItem>
                <MenuItem value="spring">Spring</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Autocomplete
            multiple
            justifycontent="flex-end"
            options={seasonalProduce}
            freeSolo
            onChange={(event, newValue) => {
              setIngredient(newValue)
            }}
            onInputChange={(event, newInputValue) => {
              setIngredient(newInputValue)
            }}
            limitTags={2}
            onSubmit={handleSearch}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  key={index}
                  size="small"
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="Find a recipe"
                placeholder="Ingredients"
                sx={{ m: 1, width: '30ch' }}
              />
            )}
          />
          <FormGroup row>
            <Toggle
              value="filters"
              name="filters"
              aria-label="search filters"
              selected={toggleFilters}
              onChange={() => setToggleFilters(!toggleFilters)}
            >
              {toggleFilters ? <FilterAltOff /> : <FilterAlt />}
            </Toggle>
            <Button type="submit" aria-label="search">
              <SearchIcon />
            </Button>
          </FormGroup>
        </Box>
      </form>

      {/* Show/Hide these FormGroups when a Toggle is toggled */}
      {toggleFilters && (
        <>
          <FormGroup
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              fontSize: '0.8em',
              padding: '10px',
            }}
            size="small"
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={dietaryForm.vegan}
                  name="Vegan"
                  onChange={() =>
                    setDietaryForm({
                      ...dietaryForm,
                      vegan: !dietaryForm.vegan,
                    })
                  }
                />
              }
              label="Vegan"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={dietaryForm.vegetarian}
                  name="Vegetarian"
                  onChange={() =>
                    setDietaryForm({
                      ...dietaryForm,
                      vegetarian: !dietaryForm.vegetarian,
                    })
                  }
                />
              }
              label="Vegetarian"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={dietaryForm['gluten-free']}
                  name="Gluten-Free"
                  onChange={() =>
                    setDietaryForm({
                      ...dietaryForm,
                      'gluten-free': !dietaryForm['gluten-free'],
                    })
                  }
                />
              }
              label="Gluten-Free"
            />
          </FormGroup>
          <FormGroup
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              fontSize: '0.8em',
              padding: '10px',
            }}
            size="small"
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={mealType.breakfast}
                  name="Breakfast"
                  onChange={() =>
                    setMealType({ ...mealType, breakfast: !mealType.breakfast })
                  }
                />
              }
              label="Breakfast"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={mealType.lunch}
                  name="Lunch"
                  onChange={() =>
                    setMealType({
                      ...mealType,
                      lunch: !mealType.lunch,
                    })
                  }
                />
              }
              label="Lunch"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={mealType.teatime}
                  name="Teatime"
                  onChange={() =>
                    setMealType({
                      ...mealType,
                      teatime: !mealType.teatime,
                    })
                  }
                />
              }
              label="Teatime"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={mealType.dinner}
                  name="Dinner"
                  onChange={() =>
                    setMealType({
                      ...mealType,
                      dinner: !mealType.dinner,
                    })
                  }
                />
              }
              label="Dinner"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={mealType.snack}
                  name="Snack"
                  onChange={() =>
                    setMealType({
                      ...mealType,
                      snack: !mealType.snack,
                    })
                  }
                />
              }
              label="Snack"
            />
          </FormGroup>
        </>
      )}
      {loading && (
        <img
          width={'100%'}
          src="https://cdn.dribbble.com/users/393062/screenshots/14492170/media/67f661f7f825b62980571026e1280675.gif"
          alt="Loading animation"
        />
      )}

      <Recipes />
      <SeasonalProduct />
    </Box>
  )
}
