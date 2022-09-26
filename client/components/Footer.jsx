import React from 'react'
import { Grid, Container, Box, Link, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {


  return (
    <Box 
      sx={{
        backgroundColor: "#3F6C51",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}>
        <Container maxWidth="lg" >
        <Grid container spacing py={6}>
            <Grid item xs={12}>
              <Box borderBottom={2} paddingBottom={1} color="white">
                <Link underline="hover" href="/" color="inherit">
                <Typography variant="h4">Seasoned <FontAwesomeIcon icon={faCarrot} /></Typography>
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
  )
}
