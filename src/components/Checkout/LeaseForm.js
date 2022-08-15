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
import { LEASE_URL, RESOURCE_URL } from '../../constants/urls';
import  { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TypeFlags } from 'typescript';
import API from '../../api/Api';

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

export default function LeaseForm() {
  const [template, setTemplate] = React.useState('');
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const [label, setLabels] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const [isTrue, setIsTrue] = React.useState(false);



  const navigate = useNavigate();
  const handleChange = (event) => {
    setTemplate(event.target.value);
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  }
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  }

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
        setLabels(value);
      };
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try{ 
      API.post(RESOURCE_URL + '/types', {
        type: data.get('type'),
        labels: data.get('labelid'),
        count: data.get('count'),
      })
      .then((response) => {
        navigate('/');
        console.log(response);
      });
    } catch (e) {
      console.log(e);

    };
  };

  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Search for a Template Lease Request
      </Typography>
      <Grid container spacing={3}>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <FormControl variant="standard" sx={{ m: 3, minWidth: 800 }}>
          <InputLabel id='resource-type'>Type</InputLabel>
          <Select 
              labelId='resource-type' 
              id='type'
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
          <FormControl variant="standard" sx={{ m: 3, minWidth: 800 }}>
          <InputLabel id='resource-label'> Labels </InputLabel>
          <Select
              labelId='resource-label'
              id='labels'
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
          How many do you want to reserve?
          </Typography>
          <Box sx={{ m: 3, minWidth: 800 }}>
          
              <Slider
                  aria-label="Always visible"
                  id='count'
                  defaultValue={1}
                  getAriaValueText={valuetext}
                  onChange={(e, value) => setCount(value)}
                  marks={marks}
                  valueLabelDisplay="on"
              />
          </Box>
          </Box>

          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" checked={isTrue} onClick={() => {
              setIsTrue(!isTrue);
              console.log('activated', isTrue) } } />}
              label="Use this request as a template for future reservations"
            />
          </Grid>
          {isTrue ? (
            <Grid item xs={12}>
              <TextField
                required
                id="template"
                name="template"
                label="Name your new template"
                fullWidth
                autoComplete="template"
                variant="outlined"
                value={template}
                onChange={handleChange}
              />
            </Grid>
          ) : null}
          {isTrue ? (
            <Grid item xs={12}>
              <TextField
                id='Name'
                name='Name'
                label='Name'
                fullWidth
                autoComplete='Name'
                variant='outlined'
                value={name}
                onChange={handleChangeName}
              />
            </Grid>
          ) : null}
          {isTrue ? (
            <Grid item xs={12}>
              <TextField
                id='Description'
                name='Description'
                label='Description'
                fullWidth
                autoComplete='Description'
                variant='outlined'
                value={description}
                onChange={handleChangeDescription}
              />
            </Grid>
          ) : null}
      </Grid>
    </React.Fragment>
  );
}
