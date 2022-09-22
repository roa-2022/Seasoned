import React from 'react'
import Recipe from './Recipe'
import { useSelector } from 'react-redux'

export default function Recipes() {
  const recipes = useSelector((state) => state.recipes)

  return (
    <>
      <div>
        {recipes?.map((recipe, idx) => {
          return <Recipe key={idx} recipe={recipe} />
        })}
      </div>
    </>
  )
}
