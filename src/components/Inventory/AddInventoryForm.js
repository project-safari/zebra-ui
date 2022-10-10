import React, {useState, useEffect} from "react";
import { Grid, Modal } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import API from "../../api/Api";
import {RESOURCE_URL, TYPE_URL} from '../../constants/urls';
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { Select, MenuItem, FormHelperText } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import TextField from "@mui/material/TextField";



function AddInventoryForm(props){

    const [type, setType] = React.useState('');
    const navigate = useNavigate();
    const [inventoryTypes, setInventoryTypes] = useState([]);
    const [owner, setOwner] = useState('');
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    const inventoryTypesAndDescriptions = async () => {
        try {
            const data = await API.get(
                RESOURCE_URL
            );
            console.log(data);
            setInventoryTypes(Object.keys(data.data));
        }
        catch (e) {
            if (e.response?.status === 401){
                localStorage.removeItem("authTokens");
                navigate('/');
            }
            else{
                console.log(e);
            }
        }
    };

    const getDescriptions = async () => {
        try {
            const data = await axios.get(
                TYPE_URL, {
                    params: {
                        types: ["dc.lab", "dc.rack"],
                    }
                }
            );
            console.log(data);
            return data;
        }
        catch (e) {
            if (e.response?.status === 401){
                localStorage.removeItem("authTokens");
                navigate('/');
            }
            else{
                console.log(e);
            }
        }
    };

    const descriptions = getDescriptions();

    useEffect(() => {
        inventoryTypesAndDescriptions();
    }, []);

    const inventoryMenuItems = inventoryTypes.map(function(item){
        return <MenuItem value= {item} > {item} </MenuItem>;
    });

    const addInventory = (event) => {
        event.preventDefault();
        try{
          API.post(RESOURCE_URL, {
            [type]: [
                {
                    "meta": {
                        "id": '01022000101012',
                        "type": {
                            "name": type,
                            "description": "data center lab"
                        },
                        "creationTime": new Date(),
                        "modificationTime": new Date(),
                        "owner": owner,
                        "labels": {
                            "system.group": type.split('.')[1].charAt(0).toUpperCase() + type.split('.')[1].slice(1)
                        },
                        "name": name
                    },
                    "status": {
                        "state": status.toLowerCase()
                    }
                }
            ]
        })
          .then((response) => {
            navigate('/');
            console.log(response);
          }) 
        } catch (e) {
          console.log(e);
        }
      }

    function handleCloseForm() {
        props.closeAddInventory();
    };
  
    return (
        <Modal
        open={props.show}
        onClose={handleCloseForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 750, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Inventory Item
          </Typography>


        <Grid container spacing={3}>
        <Box component="form" onSubmit={addInventory} noValidate>
          <FormControl variant="standard" sx={{ m: 3, minWidth: 600 }}>
          <InputLabel id='inventory-type'> Type of Resource</InputLabel>
          <Select 
              name='type'
              id='type'
              variant='outlined'
              value={type}
              onChange={(e) => setType(e.target.value)}
              label="type"
          >
            {inventoryMenuItems}
          </Select>
          </FormControl>

          <FormControl variant="standard" sx={{ m: 3, minWidth: 600 }}>
          <TextField 
              name='name'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Name of Resource"
          >
          </TextField>
          </FormControl>

          <FormControl variant="standard" sx={{ m: 3, minWidth: 600 }}>
          <TextField 
              name='owner'
              id='owner'
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              label="Owner"
          >
          </TextField>
          </FormControl>

          <FormControl variant="standard" sx={{ m: 3, minWidth: 600 }}>
          <InputLabel id='inventory-status'> Status of Resource</InputLabel>
          <Select 
              name='status'
              id='status'
              value={status}
              variant='outlined'
              onChange={(e) => setStatus(e.target.value)}
              label="Status"
          >
            <MenuItem value='inactive' > Inactive </MenuItem>
            <MenuItem value='active' > Active </MenuItem>
          </Select>
          </FormControl>

          </Box>
          </Grid>

          <Box sx={{display: 'flex', justifyContent: 'flex-end', mt: 2}}>

          <Button
              type="submit"
              onClick={addInventory}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <Button onClick={handleCloseForm} color="primary">
                Close
            </Button>
          </Box>
        </Box>
      </Modal>
    );
  }
  

export default AddInventoryForm;