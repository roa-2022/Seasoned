import React, { useEffect, useState } from 'react'
import { Box, Pagination } from '@mui/material'
import { useSelector } from 'react-redux'

export default function AppPagination({ setProducts }) {
  const pageSize = 6
  const products = useSelector((state) => state.seasonalProduct)

  const service = {
    getData: ({ from, to }) => {
      return new Promise((resolve, reject) => {
        const data = products.slice(from, to)

        resolve({
          count: products.length,
          data: data,
        })
      })
    },
  }

  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  })

  useEffect(() => {
    service
      .getData({ from: pagination.from, to: pagination.to })
      .then((response) => {
        // console.log(response)
        setPagination({ ...pagination, count: response.count })
        setProducts(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [products, pagination.from, pagination.to])

  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize
    const to = (page - 1) * pageSize + pageSize
    setPagination({ ...pagination, from: from, to: to })
  }

  return (
    <Box
      justifyContent={'center'}
      alignItems="center"
      display={'flex'}
      sx={{ margin: '40px 0px' }}
    >
      <Pagination
        color="primary"
        count={Math.ceil(pagination.count / pageSize)}
        onChange={handlePageChange}
      />
    </Box>
  )
}
