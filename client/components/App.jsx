import React from 'react'
import Recipes from './Recipes'

import SearchRecipe from './SearchRecipe'
import TopNav from './TopNav'

function App() {
  return (
    <>
      <div>
        <TopNav />
        <h1>Seasoned !!!</h1>
        {/* If wanting to apply more style to the title, can create a Header component */}
        <SearchRecipe />
        <Recipes />
      </div>
    </>
  )
}

export default App
