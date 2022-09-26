import React from 'react'
import { useSelector } from 'react-redux'
// import Stack from '@mui/material/Stack'
import { Box, Grid, Container } from '@mui/material'
import Typography from '@mui/material/Typography'

// import Card from '@mui/material/Card'
// import CardContent from '@mui/material/CardContent'
// import CardMedia from '@mui/material/CardMedia'
// import { CardActionArea } from '@mui/material'

export default function SeasonalProduct() {
  const products = useSelector((state) => state.seasonalProduct)

  const renderProducts = products?.map((product) => (
    <Grid
      item
      key={product.display_name}
      xs={2}
      sm={4}
      md={4}
      display="flex"
      flexDirection={'column'}
      g
      alignItems="center"
    >
      <img
        src={product.image_url}
        alt={product.name}
        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
      />
    </Grid>
  ))

  return (
    <div>
      <Box display="flex" justifyContent={'center'} sx={{ p: 4 }}>
        <Typography variant="h5">Seasonal Products</Typography>
      </Box>

      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          justifyContent={'center'}
          sx={{ m: '20px 4px 10px 4px' }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {renderProducts}
        </Grid>
      </Container>

      {/* <Stack direction="row" spacing={2}>
        <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={product[0]?.image_url}
              alt={product[0]?.display_name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product[0]?.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack> */}
    </div>
  )
}
