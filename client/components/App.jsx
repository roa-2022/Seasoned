import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchFruits, fetchVegetables } from '../actions'

function App() {
  const fruits = useSelector((state) => state.fruits)
  const vegetables = useSelector((state) => state.vegetables)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFruits())
    dispatch(fetchVegetables())
  }, [])

  return (
    <>
      <div className="app">
        <h1>Fruits!</h1>
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit.name}>{fruit.name}</li>
          ))}
        </ul>
        <h1>Vegetables!</h1>
        <ul>
          {vegetables.map((vegetable) => (
            <li key={vegetable.name}>{vegetable.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
