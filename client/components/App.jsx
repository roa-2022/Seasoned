import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProduce } from '../actions'

function App() {
  const produce = useSelector((state) => state.produce)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProduce())
  }, [])

  return (
    <>
      <div className="app">
        <h1>Produce!</h1>
        <ul>
          {produce.map((produce) => (
            <li key={produce.name}>{produce.display_name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
