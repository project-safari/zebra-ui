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

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 20,
        label: '20',
    },
    {
        value: 40,
        label: '40',
    },
    {
        value: 60,
        label: '60',
    },
    {
        value: 80,
        label: '80',
    },
    {
        value: 100,
        label: '100',
    },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(label, inputLabel, theme) {
    return {
        fontWeight:
            inputLabel.indexOf(label) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function valuetext(value) {
    return `${value}`;
}

const labels = [
    'Alpha',
    'Beta',
    'Gamma',
    'Delta',
    'Epsilon',
    'Zeta',
    'Eta',
    'Theta',
    'Iota',
    'red',
    'blue',
    'green',
    'yellow',
    'purple',
    'orange',
];

export default function PaymentForm() {
    const theme = useTheme();
    const [type, setType] = React.useState('');
    const [inputlabel, setInputLabel] = React.useState([]);
    const handleLabelChange = (event) => {
        const {
          target: { value },
        } = event;
        setInputLabel(
          typeof value === 'string' ? value.split(',') : value,
        );
      };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Select a Resource Type
      </Typography>
      <Grid container spacing={3}>
        <FormControl variant="standard" sx={{ m: 3, minWidth: 800 }}>
        <InputLabel id='resource-type'>Type</InputLabel>
        <Select 
            labelId='resource-type' 
            id='resource-type-select'
            value={type}
            onChange={(e) => setType(e.target.value)}
            label="Type"
        >
            <MenuItem value="Datacenter">Datacenter</MenuItem>
            <MenuItem value="Server">Server</MenuItem>
            <MenuItem value="Storage">Storage</MenuItem>
            <MenuItem value="Network">Network</MenuItem>
            <MenuItem value="Software">Software</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
        </Select>
        </FormControl>
        <Typography variant="h6" gutterBottom sx={{ m: 3 }}>
        Select Resource Labels
        </Typography>
        <FormControl variant="standard" sx={{ m: 3, minWidth: 800 }}>
        <InputLabel id='resource-label'>Label</InputLabel>
        <Select
            labelId='resource-label'
            id='resource-label-select'
            multiple
            value={inputlabel}
            onChange={handleLabelChange}
            input={<OutlinedInput id='select-multiple-chip' label='Chip' />}
            renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
            MenuProps={MenuProps}
        >
            {labels.map((label) => (
            <MenuItem key={label} value={label} style={getStyles(label, inputlabel, theme)}>
                {label}
            </MenuItem>
            ))}
        </Select>
        </FormControl>
        <Typography variant="h6" gutterBottom sx={{ m:3 }}> 
        Select the count of resources to create
        </Typography>
        <Box sx={{ m: 3, minWidth: 800 }}>
        
            <Slider
                aria-label="Always visible"
                defaultValue={1}
                getAriaValueText={valuetext}
                marks={marks}
                valueLabelDisplay="on"
            />
        </Box>
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
            id="city"
            name="city"
            label="Text Field"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Text Field"
            fullWidth
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
  );v
}
Ri