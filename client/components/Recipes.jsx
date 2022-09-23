import React from 'react'
// import Recipe from './Recipe'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'

export default function Recipes() {
  const recipes = useSelector((state) => state.recipes)

  return (
    <div>
      {recipes?.map((recipe, idx) => {
        return (
          <>
            <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={recipe.recipe.image}
                  alt="recipe"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {recipe.recipe.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>
                      Cuisine Type:{' '}
                      {recipe.recipe.cuisineType.map(
                        (string) =>
                          string[0].toUpperCase() + string.substring(1)
                      )}
                    </p>
                    <p>
                      Diet Labels:{' '}
                      {recipe.recipe.dietLabels.map((text) => {
                        const addSpace = text + ' '
                        return addSpace
                      })}
                    </p>
                    <p>Meal Type: {recipe.recipe.mealType}</p>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link key={idx} to={`/${idx}`}>
                    Recipe Here
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </>
        )
      })}
    </div>
  )
}
