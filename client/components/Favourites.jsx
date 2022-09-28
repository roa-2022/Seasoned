import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFavourites, removeFavouriteAction, editFavourite } from '../actions'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Typography,
} from '@mui/material'

function Favourites() {
  const favourites = useSelector((state) => state.favourites)
  const user = useSelector((state) => state.loggedInUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFavourites(user.auth0_id))
  }, [])

  return (
    <TableContainer
      component={Paper}
      sx={{
        margin: '0 auto',
        width: {
          xs: '90%',
          sm: '90%',
          md: '75%',
          lg: '50%',
          xl: '40%',
        },
      }}
    >
      <Table aria-label="Favourites table">
        <TableHead>
          <TableRow>
            <TableCell width="33%" align="center" vertical-align="top">
              <Typography variant="h5" color="inherit" gutterBottom>
                Name
              </Typography>
            </TableCell>
            <TableCell width="33%" variant="h1" align="center" color="inherit">
              <Typography variant="h5" color="inherit" gutterBottom>
                Done
              </Typography>
            </TableCell>
            <TableCell width="33%" variant="h1" align="center" color="inherit">
              <Typography variant="h5" color="inherit" gutterBottom>
                Delete
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {favourites?.map((favourite) => (
            <TableRow key={favourite.id}>
              <TableCell align="center">
                <Link
                  variant="body3"
                  color="inherit"
                  textAlign="center"
                  target="_blank"
                  href={favourite.url}
                  rel="noreferrer"
                  underline="hover"
                >
                  {favourite.label}
                </Link>
              </TableCell>

              <TableCell align="center">
                <Checkbox
                  size="large"
                  checked={favourite.done}
                  onChange={() =>
                    dispatch(
                      editFavourite(favourite.id, {
                        ...favourite,
                        done: !favourite.done,
                      })
                    )
                  }
                />
              </TableCell>
              {/* <TableCell>{favourite.rating}</TableCell> */}
              <TableCell align="center">
                <DeleteIcon
                  size="large"
                  underline="hover"
                  onClick={() =>
                    dispatch(removeFavouriteAction(favourite.id, user.auth0_id))
                  }
                ></DeleteIcon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Favourites
