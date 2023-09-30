import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import Auth from "../login/Auth";
import { CardMedia } from "@mui/material";
import Link from "next/link";

export default function Signin() {
    const inputStyles = {
        color: 'black', 
       
      };
      const labelStyles ={
        color:'black'
      }
  return (
   
    <main>
      <Box
        sx={{
          backgroundImage: `url('bg.jpg')`,
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
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundImage: `url('bg.jpg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              // height: '720px',

              marginTop: 10,
              width: "50%",
              height: "70vh",
              backdropFilter: "blur(30px)",
            }}
          >
            <Paper
              sx={{
                top: 10,
                boxShadow: 1,
                left: 6,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(1px)",
                textAlign: "center",
              }}
              elevation={0}
            >
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 3,
                }}
              >
                <TextField
                InputProps={{
                    style: inputStyles,
                  }}
                  InputLabelProps={{
                    style: labelStyles,
                  }}
                  label="Username"
                  variant="standard"
                  sx={{
                    width: "50%",
                    marginTop: 2,
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
                  label="Mobile no."
                  variant="standard"
                  sx={{
                    width: "50%",
                    marginTop: 2,
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
                  label="Email"
                  variant="standard"
                  sx={{
                    width: "50%",
                    marginTop: 2,
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
                  variant="standard"
                  type="password"
                  sx={{
                    width: "50%",
                    marginTop: 2,
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
              </Grid>
              <Button variant="contained" sx={{ marginTop: 2 }}>
                Sign up
              </Button>
              <Button variant="contained" sx={{ marginTop: 2, marginLeft: 2 }}>
                Reset
              </Button>
              <Typography
                variant="subtitle2"
                sx={{ color: "white", textAlign: "left", marginLeft: 10 }}
              >
                Already a user ?<Link href="/login"style={{textDecoration: "none",}}><span style={{ color: "white",fontWeight: "bold",}}
                  >Login
                  </span>
                </Link>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
