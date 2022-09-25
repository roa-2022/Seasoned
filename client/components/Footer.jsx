import React from 'react'
import { useStyles } from '../styles/styles'
import { Grid, Container, Box, Link } from '@material-ui/core'
import { Typography } from '@mui/material'

export default function Footer() {
  const classes = useStyles()

  return (
    <footer>
      <Box className={classes.newBgColour}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12}>
              <Box borderBottom={2} paddingBottom={1} color="white">
                <Typography variant='h2'>Seasoned</Typography>
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
