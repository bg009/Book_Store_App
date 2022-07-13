import React from 'react'
import {Box , Button , Typography} from "@mui/material"
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection='column' alignItems = 'center'>

        <Button LinkComponent={Link} to='/books' variant='contained' sx={{marginTop:15 , background:"orangered"}}>

          <Typography varient='h3'>View All Product</Typography>

        </Button>

      </Box>




    </div>
  )
}

export default Home