import { Box, Grid, TextField } from '@mui/material'
import Image from 'next/image'
import Auth from './login/Auth'
import Header from './Header'

export default function Home() {
  return (
    <div className=" min-h-screen  items-center justify-between ">
      <Box
        sx={{
          backgroundImage: `url('mountains.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "708px",
          width: "101.1%",
          marginTop: "-0.6%",
          marginBottom: "-2%",
          marginLeft: "-0.6%",
        }}
      >
 <Grid
          container

          sx={{
            width: "100%",
            height: "100%",
            paddingTop:1,
            paddingLeft:2
          }}
        >

<Grid
        sx={{
          backgroundImage: `url('logod.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "135px",
          width: "10%",
          
          
        
        }}
      />
      </Grid>
      </Box>
    </div>
  )
}
