import React from 'react'
import { useDispatch } from 'react-redux'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'

import { fetchRecipes } from '../actions'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image_url}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            dispatch(fetchRecipes(product.name))
          }}
        >
          <Button size="small" color="primary" type="submit">
            Search Recipe
          </Button>
        </form>
      </CardActions>
    </Card>
  )
}
