import React from 'react'
import { Grid, Container, Box, Link, Typography } from '@mui/material'

export default function Footer() {


  return (
    <footer>
      <Box>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12}>
              <Box borderBottom={2} paddingBottom={1} color="white">
                <Link href="/" color="inherit">
                  <Typography variant='h2'>Seasoned</Typography>
                </Link>
              </Box>
              <Box paddingBottom={1} paddingTop={1} color="white">
                <Link href="/" color="inherit">
                  Contact Us
                </Link>
              </Box>
              <Box paddingBottom={1} color="white">
                <Link href="/" color="inherit">
                  More Information
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  )
}
