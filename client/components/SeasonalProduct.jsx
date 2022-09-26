import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Grid, Container } from '@mui/material'
import Typography from '@mui/material/Typography'
import ProductCard from './ProductCard'

export default function SeasonalProduct() {
  const products = useSelector((state) => state.seasonalProduct)

  return (
    <div>
      {products.length > 0 && (
        <Box display="flex" justifyContent={'center'} sx={{ p: 4 }}>
          <Typography variant="h5">Seasonal Products</Typography>
        </Box>
      )}

      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          justifyContent={'center'}
          sx={{ m: '20px 4px 10px 4px' }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products?.map((product) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={2}
              display="flex"
              flexDirection={'column'}
              alignItems="center"
              key={product.display_name}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}
