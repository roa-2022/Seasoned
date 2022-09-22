import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Recipe from './Recipe'
import SearchRecipe from './SearchRecipe'

function App() {
  return (
    <>
      <div>
        <h1>SEASONAL!!!</h1>
        {/* <Recipes /> */}
        <Routes>
          <Route path="/" element={<SearchRecipe />} />
          <Route path="/:recipe" element={<Recipe />} />
        </Routes>
      </div>
    </>
  )
}

export default App
