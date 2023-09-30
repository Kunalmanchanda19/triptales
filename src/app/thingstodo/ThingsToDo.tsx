"use client"
import { useFormik } from 'formik';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  makeStyles,
  Grid,
} from '@mui/material';
export default function ThingsToDo()
{
    const formik = useFormik({
        initialValues: {
          selectedOption: '', // Initial value for the Select Box
        },
        onSubmit: (values) => {
          // Handle form submission with selectedOption value
          console.log('Selected Option:', values.selectedOption);
        },
      });
    return(
        <main>
             <form onSubmit={formik.handleSubmit}>
      <FormControl variant="outlined" >
        <Grid>
        <InputLabel id="select-label">Select an Option</InputLabel>
        <Select
          labelId="select-label"
          id="selectedOption"
          name="selectedOption"
          label="Select an Option"
          value={formik.values.selectedOption}
          onChange={formik.handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
        </Grid>

      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
        </main>
    )
}