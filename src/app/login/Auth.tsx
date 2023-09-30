"use client";
import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import Head from "next/head";
import Link from 'next/link'

export default function Auth() {
  const inputStyles = {
    color: 'black', 
   
  };
  const labelStyles ={
    color:'black'
  }

  return (
    <main className="">
           <Box
        sx={{
          backgroundImage: `url('house.jpg')`,
          backgroundSize: "cover", 
          backgroundRepeat: "no-repeat",
          height: "708px",
          width: "101.1%",
          marginTop: "-0.6%",
          marginBottom:'-2%',
          marginLeft:'-0.6%'
        }}
      >
      <Grid
      
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh"}}
        >
          {/* <Box
            component="img"
            sx={{
              height: 80,
              width: 80,
              marginBottom:2 
            }}
            src="login.jpg"
          /> */}
            <Paper  
          
            sx={{
                
                boxShadow:1,
                width: "50%",
                height: '330px',
                display:'flex',
                padding:2,
                flexDirection: 'column', 
                alignItems: 'center',
                backgroundColor: "rgba(255, 255, 255, 0.1)", 
                // backgroundColor: 'transparent',
                backdropFilter: "blur(1px)", 
                textAlign: 'center',
                justifyContent:'center'

              }}>
          <Grid sm={12} lg={6} xs={10} md={12} xl={8} sx={{}} >
          
          <TextField
              label="Username"
              InputProps={{
                style: inputStyles,
              }}
              InputLabelProps={{
                style: labelStyles,
              }}
              type="text"
              variant="standard"
              sx={{
                color:'orange',

                width:'100%',
                marginTop:2,
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "darkblue",
                  },
                },
              }}
            />
              <TextField
              
              InputProps={{
                style: inputStyles,
              }}
              InputLabelProps={{
                style: labelStyles,
              }}
              label="Password"
              type="password"
              variant="standard"
              sx={{
                width:'100%',
                marginTop:2,
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "darkblue",
                  },
                },
              }}
            />
          
          <Button variant="contained" sx={{width:'100%', marginBottom:2, marginTop:2 }}>Login</Button>
          <Grid  sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
          }}><Typography variant="subtitle2" sx={{color:'white'}}>New user ? &nbsp;</Typography>
          <Typography variant="subtitle2" > <Link href="/signin"  style={{textDecoration: 'none'}}>  <div style={{  color: 'white', fontWeight: 'bold' }}>Signup</div> </Link></Typography>
          </Grid> 
          </Grid>
          </Paper>
        </Grid>
      </Grid>

      </Box>
    </main>
  );
}
