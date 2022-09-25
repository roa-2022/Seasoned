import React from 'react'
import { Grid, Container, Box, Link } from '@material-ui/core'

export default function Footer() {
  return (
    <footer>
      <Box paddingBottom={10} paddingTop={10} sx={{ bgcolor: 'primary.main' }}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12}>
              <Box borderBottom={2} paddingBottom={1}>
                Seasoned
              </Box>
              <Box paddingBottom={1} paddingTop={1}>
                <Link href="/" color="inherit">
                  Contact Us
                </Link>
              </Box>
              <Box paddingBottom={1}>
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
