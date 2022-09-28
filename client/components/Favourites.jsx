import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Link } from '@mui/material'

import { getFavourites, removeFavouriteAction, editFavourite } from '../actions'

function Favourites() {
  const favourites = useSelector((state) => state.favourites)
  const user = useSelector((state) => state.loggedInUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFavourites(user.auth0_id))
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Favourites table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Link</TableCell>
            <TableCell align="right">Done</TableCell>
            {/* <TableCell align="right">Rating</TableCell> */}
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {favourites?.map((favourite) => (
            <TableRow key={favourite.id}>
              <TableCell component="th" scope="row">
                {favourite.id}
              </TableCell>
              <TableCell align="right">{favourite.label}</TableCell>
              <TableCell align="right">
                <Link target="_blank" href={favourite.url} rel="noreferrer">
                  {favourite.url}
                </Link>
              </TableCell>
              <TableCell align="right">
                <input
                  type="checkbox"
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
              {/* <TableCell align="right">{favourite.rating}</TableCell> */}
              <TableCell align="right">
                <button
                  onClick={() =>
                    dispatch(removeFavouriteAction(favourite.id, user.auth0_id))
                  }
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Favourites
