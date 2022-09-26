import React from 'react'
import { useSelector } from 'react-redux'

export default function SeasonalProduct() {
  const product = useSelector((state) => state.seasonalProduct)
  return (
    <div>
      <h3>{product[0]?.name}</h3>
      <img src={product[0]?.image_url} alt={product[0]?.display_name} />
    </div>
  )
}
