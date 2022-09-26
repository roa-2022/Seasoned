import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import {
  Button,
  CardActionArea,
  CardActions,
  CssBaseline,
  Grid,
  Container,
} from '@mui/material'

export default function Recipes() {
  const recipes = useSelector((state) => state.recipes)
  const dietary = useSelector((state) => state.dietary)

  const shortlistedRecipe = recipes.filter((recipe) => {
    const filtered = dietary.every((dietaryType) =>
      recipe.recipe.healthLabels.includes(dietaryType)
    )
    if (filtered) {
      return recipe
    }
  })
  console.log()
  const cards = [1, 2, 3, 4, 5, 6]

  return (
    <>
      {shortlistedRecipe ? (
        <div>
          {shortlistedRecipe.map((recipe, idx) => {
            const { image, label, cuisineType, dietLabels, mealType } =
              recipe.recipe

            return (
              <>
                <CssBaseline />
                <Container sx={{ py: 2 }} maxWidth="md">
                  <Grid container spacing={4}>
                    {cards.map((card) => (
                      <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card
                          sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                          }}
                        >
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              image={image}
                              alt={label}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                {label}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Cuisine Type:{' '}
                                {cuisineType.map(
                                  (string) =>
                                    string[0].toUpperCase() +
                                    string.substring(1)
                                )}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Diet Labels:{' '}
                                {dietLabels.map((text) => {
                                  const addSpace = text + ' '
                                  return addSpace
                                })}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Meal Type: {mealType}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Button
                              component={Link}
                              to={`/recipes/${idx}`}
                              size="small"
                              color="primary"
                            >
                              Recipe Here
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              </>
            )
          })}
        </div>
      ) : (
        <div>
          {recipes.map((recipe, idx) => {
            const { image, label, cuisineType, dietLabels, mealType } =
              recipe.recipe

            return (
              <>
                <CssBaseline />
                <Container sx={{ py: 2 }} maxWidth="md">
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                      <Card
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            image={image}
                            alt={label}
                          />
                          <CardContent sx={{ flexGrow: 1 }}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {label}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Cuisine Type:{' '}
                              {cuisineType.map(
                                (string) =>
                                  string[0].toUpperCase() + string.substring(1)
                              )}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Diet Labels:{' '}
                              {dietLabels.map((text) => {
                                const addSpace = text + ' '
                                return addSpace
                              })}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Meal Type: {mealType}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button
                            component={Link}
                            to={`/recipes/${idx}`}
                            size="small"
                            color="primary"
                          >
                            Recipe Here
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  </Grid>
                </Container>
              </>
            )
          })}
        </div>
      )}
    </>
  )
}
