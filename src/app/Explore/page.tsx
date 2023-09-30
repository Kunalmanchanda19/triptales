import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";

export default function Home() {
  const data = [
    {
      id: 1,
      name: "Manali",
      href: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg",
      content:' Gifted to the world by the mighty Himalayas, it is known to be one of the most popular destinations for Honeymooners. Manali offers magnificent views of the Pir Panjal and the Dhauladhar ranges, covered in a thick blanket of snow for most of the year.',
      bestTime:'sep-jan',
    },
    {
      id: 2,
      name: "Leh Ladakh",
      href: "https://www.tourmyindia.com/states/ladakh/imagess/pangong-lake-ladakh1.jpg",
      content:'Ladakh is a union territory in the Kashmir region of India. Formerly falling in the state of Jammu & Kashmir, Ladakh was administered a union territory on 31st October 2019. Extending from the Siachen Glacier to the main Great Himalayas, Ladakh is a land like no other. Dominated by dramatic land...'
   
      ,bestTime:'june-august', },
    {
      id: 3,
      name: "Srinagar",
      href: "https://www.holidify.com/images/bgImages/SRINAGAR.jpg",
      content:'Famously known as Heaven on Earth, Srinagar is located in the union territory of Jammu & Kashmir, on the banks of river Jhelum. Srinagar is known for the stationary houseboats and gondola-type rowboats- Shikaras on Dal Lake. Adorned with tranquil Dal Lake & Nigeen Lake, Srinagar'
      ,bestTime:'oct-dec',},
    {
      id: 4,
      name: "Coorg",
      href: "https://www.holidify.com/images/bgImages/COORG.jpg",
      content:'With spectacular valleys, breathtaking views, snowcapped mountains, and lush forests of oak, deodar, and pine, Manali is a magical hill station at the northern end of Kullu valley in Himachal Pradesh. Gifted to the world by the mighty Himalayas, it is known to be one of the most popular destinations..'
      ,bestTime:'aug-oct', },
    {
      id: 5,
      name: "Andaman",
      href: "https://www.holidify.com/images/bgImages/ANDAMAN-NICOBAR-ISLANDS.jpg",
      content:'Replete with turquoise blue water beaches and a bit of history, Andaman & Nicobar Islands is a little slice of paradise tucked around 1,400 km away from the east coast of mainland India. Port Blair, the capital of this union territory, has a major airport and seaport connected with the rest of t.'
      ,bestTime:'may-aug', },

    // Add more rows as needed
  ];
  return (
    <main>
      <div>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "100%",
            //  height: "50vh",
            paddingTop: 20,
            paddingBottom: 5,
            //  border:2
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Places to visit
          </Typography>
        </Grid>

        <Grid container sx={{ width: "100%" }}>
          <Grid container>
            <Grid item xs={12}>
              <Paper elevation={3}>
                <Grid
                  justifyContent="center"
                  alignItems="center"
                  container
                  sx={{
                    border: 2,
                    borderRadius: 2,
                    height: "10vh",
                    paddingLeft: 2,
                  }}
                >
                  <Grid  alignItems="center" justifyContent="center" container md={1} >
                    <Typography variant="subtitle1">S.no</Typography>
                  </Grid>
                  <Grid alignItems="center" justifyContent="center" container  md={6}>
                    <Typography variant="subtitle1">Name</Typography>
                  </Grid>
                  <Grid alignItems="center" justifyContent="center" container  md={2}>
                    <Typography variant="subtitle1">Ratings</Typography>
                  </Grid>
                  <Grid alignItems="center" justifyContent="center" container  md={3}>
                    <Typography variant="subtitle1">Description</Typography>
                  </Grid>
                 
                </Grid>
                {data.map((row) => (
                  <Grid
                    container
                    key={row.id}
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      border: 1,
                      marginTop: 1,
                      borderRadius: 2,
                    }}
                  >
                    <Grid
                      justifyContent="center"
                      alignItems="center"
                      container
                      xs={12}
                      md={1}
                    >
                      <Typography
                        variant="h6"
                        sx={{ justifyContent: "center", alignItems: "center" }}
                      >
                        {row.id}
                      </Typography>
                    </Grid>
                    <Grid
                      justifyContent="center"
                      alignItems="center"
                      container
                      xs={12}
                      md={2}
                    >
                      <Typography variant="h5">{row.name}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Box
                        sx={{
                          backgroundImage: `url(${row.href})`,
                          backgroundSize: "cover",
                          borderRadius: 2,
                          backgroundRepeat: "no-repeat",
                          height: "300px",
                          width: "80%", // Set to 100% for both xs and md
                          marginTop: "1%",
                          marginBottom: "2%",
                          // marginLeft: '%'
                        }}
                      ></Box>
                    </Grid>

                    <Grid
                      justifyContent="center"
                      alignItems="center"
                      container
                      xs={12}
                      md={2}
                      sx={{}}
                    >
                      <Grid
                        xs={12}
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <Typography variant="body2">Cuisine</Typography>
                        <Grid
                          xs={12}
                          container
                          justifyContent="right"
                          alignItems="center"
                        >
                          <Box
                            sx={{
                              backgroundColor: "green",
                              color: "white",
                              padding: 1,
                              borderRadius: 2,
                              width: "100px",
                              marginX: 1,
                              textAlign: "center",
                              alignSelf: "right",
                            }}
                          >
                            4.5/5
                          </Box>
                        </Grid>
                      </Grid>
                      <Grid
                        xs={12}
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <Typography variant="body2">Accomodation</Typography>
                        <Grid
                          xs={12}
                          container
                          justifyContent="right"
                          alignItems="center"
                        >
                          <Box
                            sx={{
                              backgroundColor: "green",
                              color: "white",
                              padding: 1,
                              borderRadius: 2,
                              width: "100px",
                              marginX: 1,
                              textAlign: "center",
                            }}
                          >
                            4.5/5
                          </Box>
                        </Grid>
                      </Grid>
                      <Grid
                        xs={12}
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <Typography variant="body2">Attractions</Typography>
                        <Grid
                          xs={12}
                          container
                          justifyContent="right"
                          alignItems="center"
                        >
                          <Box
                            sx={{
                              backgroundColor: "green",
                              color: "white",
                              padding: 1,
                              borderRadius: 2,
                              width: "100px",
                              textAlign: "center",
                              marginX: 1,
                              alignSelf: "right",
                            }}
                          >
                            4.5/5
                          </Box>
                        </Grid>
                      </Grid>
                      <Grid
                        xs={12}
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <Typography variant="body2">Natural beauty</Typography>
                        <Grid
                          xs={12}
                          container
                          justifyContent="right"
                          alignItems="center"
                        >
                          <Box
                            sx={{
                              backgroundColor: "green",
                              color: "white",
                              padding: 1,
                              borderRadius: 2,
                              width: "100px",
                              textAlign: "center",
                              marginX: 1,
                              alignSelf: "right",
                            }}
                          >
                            4.5/5
                          </Box>
                        </Grid>
                      </Grid>
                      <Grid
                        xs={12}
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <Typography variant="body2">Economical</Typography>
                        <Grid
                          xs={12}
                          container
                          justifyContent="right"
                          alignItems="center"
                        >
                          <Box
                            sx={{
                              backgroundColor: "green",
                              color: "white",
                              padding: 1,
                              borderRadius: 2,
                              width: "100px",
                              textAlign: "center",
                              marginX: 1,
                              alignSelf: "right",
                            }}
                          >
                            4.5/5
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid xs={12} md={3}>
                      <Typography variant="body2" sx={{ padding: 2 }}>
                       {row.content}
                      </Typography>
                      <Button variant="contained" sx={{ margin: 3 }}>
                        Read more
                      </Button>
                      <Typography variant="subtitle1" sx={{marginTop:4, marginLeft:3}}>
                        Best time to visit : {row.bestTime}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </main>
  );
}
