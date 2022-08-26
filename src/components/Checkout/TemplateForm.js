import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Select, MenuItem } from '@mui/material';
import Chip from '@mui/material/Chip';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import InputBase from '@mui/material/InputBase';
import API from '../../api/Api';
import { RESOURCE_URL } from '../../constants/urls';

/*
This form is used for selecting a template to create a lease from.
*/


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

const NDCLUSTER3 = 
 [
    {
      id: "69e00072-e426-4257-97a3-84c4f71f83eb",
      type: "Lease",
      labels: {
        "system.group": "leases"
      },
      status: {
        fault: "none",
        lease: "free",
        usedBy: "admin@zebra.project-safari.io",
        state: "inactive",
        createdTime: "2022-08-16T16:33:48.10341886Z"
      },
      duration: 14400000000000,
      request: [
        {
          type: "Server",
          group: "global",
          name: "",
          count: 4
        }
      ],
      activationTime: "0001-01-01T00:00:00Z"
    }
]
const NDCLUSTER2 = 
 [
    {
      id: "69e00052-e426-4257-97a3-84c4f71f83eb",
      type: "Lease",
      labels: {
        "system.group": "leases"
      },
      status: {
        fault: "none",
        lease: "free",
        usedBy: "admin@zebra.project-safari.io",
        state: "inactive",
        createdTime: "2022-08-16T16:33:48.10341886Z"
      },
      duration: 14400000000000,
      request: [
        {
          type: "Server",
          group: "global",
          name: "",
          count: 3
        }
      ],
      activationTime: "0001-01-01T00:00:00Z"
    }
]

const vNDCLUSTER3 = 
 [
    {
      id: "69e00083-e426-4257-97a3-84c4f71f83eb",
      type: "Lease",
      labels: {
        "system.group": "leases"
      },
      status: {
        fault: "none",
        lease: "free",
        usedBy: "admin@zebra.project-safari.io",
        state: "inactive",
        createdTime: "2022-08-16T16:33:48.10341886Z"
      },
      duration: 14400000000000,
      request: [
        {
          type: "VM",
          group: "global",
          name: "",
          count: 3
        }
      ],
      activationTime: "0001-01-01T00:00:00Z"
    }
]
const NDCLUSTER3APIC =
[
  {
    id: "69e00087-e426-4257-97a3-84c4f71f83eb",
    type: "Lease",
    labels: {
      "system.group": "leases"
    },
    status: {
      fault: "none",
      lease: "free",
      usedBy: "admin@zebra.project-safari.io",
      state: "inactive",
      createdTime: "2022-08-16T16:33:48.10341886Z"
    },
    duration: 14400000000000,
    request: [
      {
        type: "Server",
        group: "global",
        name: "",
        count: 4
      }
    ],
    activationTime: "0001-01-01T00:00:00Z"
  }
]

// If 2 Node ND cluster is selected, send an axios request to get the lease for 2 Node ND cluster
// If 3 Node vND cluster is selected, send an axios request to get the lease for 3 Node vND cluster
export default function TemplateForm() {
  const [open, setOpen] = React.useState(false);
  const [isTrue, setIsTrue] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


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
    const handleSubmit = (event) => {
      event.preventDefault();
    try{
      API.post(RESOURCE_URL, {
          template})
      .then((response) => {
        console.log(response);
      })
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Search for a Template Lease Request
      </Typography>
      <Grid container spacing={3}>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <FormControl sx={{ m: 3, minWidth: 800 }} variant="standard">
            <InputLabel id="demo-customized-select-label">Templates</InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={template}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <MenuItem value={0}>Custom Lease Request</MenuItem>
              <MenuItem value={NDCLUSTER3}>3 Node ND Cluster</MenuItem>
              <MenuItem value={vNDCLUSTER3}>3 Node vND Cluster</MenuItem>
              <MenuItem value={NDCLUSTER2}>2 Node ND Cluster</MenuItem>
              <MenuItem value={NDCLUSTER3APIC}>3 Node ND Cluster & APIC</MenuItem>
            </Select>
          </FormControl>
          {template != 0 ? (
            <><Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button><Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  This is a success message!
                </Alert>
              </Snackbar></>
          ) : ( null )}
        </Box>
      </Grid>
    </React.Fragment>
  );
}
