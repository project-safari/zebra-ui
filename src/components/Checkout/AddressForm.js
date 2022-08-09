import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTheme } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { Select, MenuItem } from '@mui/material';
import Chip from '@mui/material/Chip';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Templates from '../ImageList/Templates';


export default function AddressForm() {

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Select a Resourse Template, or create a new one
      </Typography>
      <Grid item sx={12}>
        <Templates />
      </Grid>
      
      <Grid container spacing={3}>
    
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Project Name"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Text Field"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Text Field"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this request as a template for future reservations"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}