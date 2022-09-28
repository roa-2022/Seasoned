import React, { useState, useEffect } from 'react'
import { Grid, Link, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
  const [bounce, setBounce] = useState(true) 

  useEffect(() => {
    setTimeout(() => {
      setBounce(false)
    },1000)
  }, [])

  return (
    <Grid container>
      <Grid item xs={12}>
        <Link underline="none" href="/">
          <Typography 
          sx={{
            padding: "20px 0",
            color: "#3F6C51",
            textAlign: "center",
          }} 
          variant="h2">
            Seasoned{" "}
            <FontAwesomeIcon
              color='#BF572B'
              fontSize={50}
              icon={faCarrot}
              bounce={bounce} />
          </Typography>
        </Link> 
      </Grid>
    </Grid>
  )
}
