import React, { useState, useEffect } from 'react'
import { Link, Box } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  const [bounce, setBounce] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setBounce(false)
    }, 1000)
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Link
        underline="none"
        href="/"
        variant="h2"
        sx={{
          padding: '20px 0',
          color: '#3F6C51',
        }}
      >
        {'Seasoned' + ' '}
        <FontAwesomeIcon
          color="#BF572B"
          fontSize={50}
          icon={faCarrot}
          bounce={bounce}
        />
      </Link>
    </Box>
  )
}
