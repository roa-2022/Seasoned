import React from 'react'
import { useDispatch } from 'react-redux'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

import { fetchRecipes } from '../actions'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea
          onClick={(e) => {
            e.preventDefault()
            dispatch(fetchRecipes(product.name))
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={product.image_url}
            alt={product.name}
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontSize: '16px' }}
            >
              {/* Converting the first letter to UpperCase using Regex */}
              {product.name.replace(/^./, product.name[0].toUpperCase())}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}
