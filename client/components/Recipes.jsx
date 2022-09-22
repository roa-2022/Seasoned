import React from 'react'
// import Recipe from './Recipe'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// TODO: apply Routes
// Click on the photo/title and take user to another route that displays the entire recipe

export default function Recipes() {
  const recipes = useSelector((state) => state.recipes)

  return (
    <>
      <div>
        {recipes?.map((recipe, idx) => {
          return (
            <>
              <div>
                <Link key={idx} to={`/${recipe.recipe.label}`}>
                  {recipe.recipe.label}
                </Link>
                <img src={recipe.recipe.image} alt="recipe" />

                {/* <Recipe recipe={recipe} /> */}
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
