import React from 'react'
import { Grid, Container, Box, Link } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'
import { useStyles } from '../styles/mui_overrides'

export default function Footer() {
  const classes = useStyles()
  const gitHubLinks = {
    pei: 'https://github.com/pei-yeshuang-zhang',
    zin: 'https://github.com/ZinHoang',
    ash: 'https://github.com/MrAshRockett',
    brendan: 'https://github.com/brendan-jarvis',
    tomas: 'https://github.com/tomas-alves08',
  }
  return (
    <Box
      sx={{
        backgroundColor: '#3F6C51',
        color: 'white',
        bottom: '-1px',
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Grid container paddingBottom={5} paddingTop={5}>
          <Grid item xs={12} paddingBottom={4}>
            <Box color="inherit">
              <Link underline="none" href="/" color="inherit" variant="h4">
                {'Seasoned' + ' '} <FontAwesomeIcon icon={faCarrot} />
              </Link>
            </Box>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={12} md={2.4} color="inherit">
              <Link
                underline="hover"
                href={gitHubLinks.pei}
                target="_blank"
                color="inherit"
                variant="body2"
              >
                {'Pei Zhang' + ' '}
                <GitHubIcon className={classes.gitHubIcon} />
              </Link>
            </Grid>

            <Grid item xs={12} md={2.4} color="inherit">
              <Link
                underline="hover"
                href={gitHubLinks.zin}
                target="_blank"
                color="inherit"
                variant="body2"
              >
                {'Zin Hoang' + ' '}
                <GitHubIcon className={classes.gitHubIcon} />
              </Link>
            </Grid>

            <Grid item xs={12} md={2.4} color="inherit">
              <Link
                underline="hover"
                href={gitHubLinks.ash}
                target="_blank"
                color="inherit"
                variant="body2"
              >
                {'Ash Rockett' + ' '}
                <GitHubIcon className={classes.gitHubIcon} />
              </Link>
            </Grid>

            <Grid item xs={12} md={2.4} color="inherit">
              <Link
                underline="hover"
                href={gitHubLinks.brendan}
                target="_blank"
                color="inherit"
                variant="body2"
              >
                {'Brendan Jarvis' + ' '}
                <GitHubIcon className={classes.gitHubIcon} />
              </Link>
            </Grid>

            <Grid item xs={12} md={2.4} color="inherit">
              <Link
                underline="hover"
                href={gitHubLinks.tomas}
                target="_blank"
                color="inherit"
                variant="body2"
              >
                {'Tomas Alves de Souza' + ' '}
                <GitHubIcon className={classes.gitHubIcon} />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
