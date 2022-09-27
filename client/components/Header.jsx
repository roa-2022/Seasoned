import React from 'react'
import { Box, Link, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {


  return (
    <Box>
      <Link underline="none" href="/">
        <Typography 
        sx={{
          padding: "20px 0",
          color: "#3F6C51",
          textAlign: "center",
        }} 
        variant="h2">
          Seasoned 
          <FontAwesomeIcon
            
            color='#BF572B'
            fontSize={50}
            icon={faCarrot} />
        </Typography>
      </Link>
    </Box>

  )
}
