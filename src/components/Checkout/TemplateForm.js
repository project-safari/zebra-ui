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
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Select, MenuItem } from '@mui/material';
import Chip from '@mui/material/Chip';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import InputBase from '@mui/material/InputBase';


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

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));


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


export default function TemplateForm() {
  const [template, setTemplate] = React.useState('');
  const handleChange = (event) => {
    setTemplate(event.target.value);
  };
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
        Search for a Template Lease Request
      </Typography>
      <Grid container spacing={3}>

        <FormControl sx={{ m: 3, minWidth: 800 }} variant="standard">
        <InputLabel id="demo-customized-select-label">Templates</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={template}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>Custom Lease Request</em>
          </MenuItem>
          <MenuItem value={10}>3 Node nd-cluster</MenuItem>
          <MenuItem value={20}>4 Node nd-cluster</MenuItem>
          <MenuItem value={30}>2 Node nd-cluster</MenuItem>
          <MenuItem value={40}>3 Node nd-cluster & APIC</MenuItem>
        </Select>
      </FormControl>
      </Grid>
    </React.Fragment>
  );
}
