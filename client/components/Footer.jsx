import React from 'react'
import { Grid, Container, Box, Link, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {

  return (
    <Box 
      sx={{
        backgroundColor: "#3F6C51",
        color: "white",
        bottom: "-1px",
        width: "100%",
      }}>
      <Container maxWidth="lg" >
        <Grid container spacing paddingBottom={10} paddingTop={2}>
          <Grid item xs={12}>
              <Box paddingBottom={1} color="inherit">
                <Link underline="none" href="/" color="inherit">
                <Typography variant="h6">Seasoned <FontAwesomeIcon icon={faCarrot} /></Typography>
                </Link>
              </Box>
            <Box sx={{ fontSize: "0.8em" }}>
              <Box paddingBottom={1} paddingTop={1} color="inherit">
                <Link  underline="none" href="/" color="inherit">
                  Contact Us
                </Link>
              </Box>
              <Box paddingBottom={1} color="inherit">
                <Link underline="none" href="/" color="inherit">
                  More Information
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
