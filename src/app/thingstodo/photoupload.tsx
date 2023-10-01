'use client'
import { useState, ChangeEvent } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

function PhotoUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
    }
  };

  return (
    <Grid sx={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'80vh'}}>
    <Paper elevation={3} style={{ padding: '16px' }}>
      <Typography variant="h5" gutterBottom>
        Upload Your Photo
      </Typography>
      {selectedFile && (
        <Grid>
          <Box
          sx={{
            backgroundImage: selectedFile ? `url(${URL.createObjectURL(selectedFile)})` : 'none', // Remove the default image
            backgroundSize: "contain ", 
            backgroundRepeat: "no-repeat",
            height: '50%',
            width: "50%",
          
            borderRadius:15
          }}
        ></Box>
        </Grid>
        // <img
        //   src={URL.createObjectURL(selectedFile)}
        //   alt="User's uploaded photo"
        //   width="200"
        // />
      )}
      <input type="file" accept="image/*" onChange={handleFileUpload} />
     
    </Paper>
    </Grid>
  );
}

export default PhotoUpload;
