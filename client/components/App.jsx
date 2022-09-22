import React from 'react'
import Recipes from './Recipes'

import SearchRecipe from './SearchRecipe'

function App() {
  return (
    <>
      <div>
        <h1>SEASONAL !!!</h1>
        {/* If wanting to apply more style to the title, can create a Header component */}
        <SearchRecipe />
        <Recipes />
      </div>
    </>
  )
}

export default App
