import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// import { fetchFruits } from '../actions'
import SearchRecipe from './SearchRecipe'

function App() {
  // const fruits = useSelector((state) => state.fruits)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchFruits())
  // }, [])

  return (
    <>
      <div>
        <SearchRecipe />
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        {/* <ul>
          {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul> */}
      </div>
    </>
  )
}

export default App
