import React from 'react'

import { TextField, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export default function SearchRecipe() {
  function handleSearch(e) {
    e.preventDefault()
    // console.log('Testing function')
  }
  return (
    <>
      <div>
        <form onSubmit={handleSearch}>
          <TextField
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
