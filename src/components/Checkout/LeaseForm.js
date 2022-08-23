import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTheme } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Select, MenuItem, FormHelperText } from '@mui/material';
import Chip from '@mui/material/Chip';
import Checkbox from '@mui/material/Checkbox';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
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
        value: 1,
        label: '1',
    },
    {
        value: 2,
        label: '2',
    },
    {
        value: 3,
        label: '3',
    },
    {
        value: 4,
        label: '4',
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 6,
        label: '6',
    },
    {
        value: 7,
        label: '7',
    },
    {
        value: 8,
        label: '8',
    },
    {
        value: 9,
        label: '9',
    },
    {
        value: 10,
        label: '10',
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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
  const [group, setGroup] = React.useState('');

  const [label, setLabels] = React.useState([]);
  const [count, setCount] = React.useState(1);
  const [isTrue, setIsTrue] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


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
    const [resourceName, setResourceName] = React.useState('');
    const [resources, setResources] = React.useState([]);

    const handleLabelChange = (event) => {
        const {
          target: { value },
        } = event;
        setInputLabel(
          typeof value === 'string' ? value.split(',') : value,
        );
        setLabels(value);
        console.log(value);
      };
 

  const makeLease = (event) => {
    event.preventDefault();
    try{
      API.post(RESOURCE_URL, {
        Lease: [
              {
                  id: '6ece8a94-367b-4af6-8f22-e964b1b0b779',
                  type: 'Lease',
                  labels: {
                      'system.group': 'leases'
                  },
                  status: {
                      fault: 'none',
                      lease: 'free',
                      usedBy: 'admin@zebra.project-safari.io',
                      state: 'inactive',
                      createdTime: '2022-08-16T09:31:49.714958-07:00'
                  },
                  duration: 14400000000000,
                  request: [
                      {
                          type: type,
                          group: 'global',
                          name: '',
                          count: count
                      }
                  ],
                  activationTime: '0001-01-01T00:00:00Z'
              }
          ]})
      .then((response) => {
        navigate('/');
        console.log(response);
      })
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <React.Fragment>
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, minWidth: 700 }}
        placeholder="Search for a Specific Resource ID"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 24, m: 0.5 }} orientation="vertical" />

      <Typography variant="h6" gutterBottom>
        Create custom lease request
      </Typography>
      <Grid container spacing={3}>
        <Box component="form" onSubmit={makeLease} noValidate>
          <FormControl variant="standard" sx={{ m: 3, minWidth: 800 }}>
          <InputLabel id='resource-type'>Type</InputLabel>
          <Select 
              labelId='type' 
              name='type'
              id='type'
              value={type}
              onChange={(e) => setType(e.target.value)}
              label="type"
          >
              <MenuItem value="Datacenter">Datacenter</MenuItem>
              <MenuItem value="IP Address Pool">IP Address Pool</MenuItem>
              <MenuItem value="Lab">Lab</MenuItem>
              <MenuItem value="Rack">Rack</MenuItem>
              <MenuItem value="Server">Server</MenuItem>
              <MenuItem value="Switch">Switch</MenuItem>
              <MenuItem value="VLAN Pool">VLAN Pool</MenuItem>
              <MenuItem value="VM">VM</MenuItem>
          </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 3, minWidth: 800 }}>
          <InputLabel id="labels" sx={{ml: 1.5}}>Labels</InputLabel>
          <Select
              labelId='labels'
              name='labels'
              label="Labels"
              id='labels'
              multiple
              value={inputlabel}
              onChange={handleLabelChange}
              helperText="Please select any label filters"
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
          <FormHelperText>Please select any label filters</FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 3, minWidth: 120, display:'inline-block' }}>
        <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
          <option aria-label="None" value="" />
          <optgroup label="Datacenter">
            <option value={1}>Address</option>
          </optgroup>
          <optgroup label="Rack">
            <option value={2}>Row</option>
          </optgroup>
          <optgroup label="Server">
            <option value={3}>Board IP</option>
            <option value={4}>Model</option>
          </optgroup>
          <optgroup label="Switch">
            <option value={5}>Management IP</option>
            <option value={6}>Model</option>
            <option value={7}>Number of Ports</option>
          </optgroup>
          <optgroup label="VLAN Pool">
            <option value={8}>Range Start</option>
            <option value={9}>Range End</option>
          </optgroup>
          <optgroup label="VM">
            <option value={10}>ESX ID</option>
            <option value={11}>Management IP</option>
            <option value={12}>vCenter ID</option>
          </optgroup>
        </Select>
        <TextField sx={{minWidth: 615}} 
              labelId='name'
              name='name'
              placeholder='Additional requests'
              id='name'
              helperText="Select any additional query parameters"
              value={resourceName}
              onChange={(e) => setResourceName(e.target.value)}
          />
      </FormControl>
          <Typography variant="h6" gutterBottom sx={{ m:3 }}> 
          How many do you want to reserve?
          </Typography>
          <Box sx={{ m: 3, minWidth: 800 }}>
          
              <Slider
                  aria-label="Always visible"
                  name='count'
                  id='count'
                  step={1}
                  defaultValue={1}
                  min={0}
                  max={10}
                  getAriaValueText={valuetext}
                  onChange={(e, value) => {
                    setCount(value)
                    console.log(value)
                    }
                  }
                  marks={marks}
                  valueLabelDisplay="on"
              />
          </Box>
            <Button
              type="submit"
              onClick={handleClick}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              This is a success message!
            </Alert>
            </Snackbar>
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
                label="Name your Template"
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
