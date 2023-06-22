import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import { red, green } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import renderCellExpand from '../../utils/renderCellExpand';
import AddIcon from '@mui/icons-material/Add';
import { RESOURCE_URL } from '../../constants/urls';
import API from '../../api/Api'; 
import axios from 'axios';
import { Navigate } from "react-router-dom";


/*
This is the datatable used to do CRUD operations on the inventory.
*/


function getChipProps(params){
    if (params.value === "inactive") {
      return {
        icon: <WarningIcon style={{ fill: red[500] }} />,
        label: params.value,
        style: {
            borderColor: red[500],
        }
      };
    } else {
      return {
        icon: <CheckCircleIcon  style={{ fill: green[500] }} />,
        label: params.value,
        style: {   
            borderColor: green[500],
        }
      };
    }
  }

const columns = [
    { field: 'id', headerName: 'Resource ID', width: 150, editable: true },
    { field: 'type', headerName: 'Resource Type', width: 150, editable: true, 
        valueGetter: (params) => (params.row?.type?.description)},
    { field: 'state', headerName: 'Status', width: 150, editable: true, 
        valueGetter: (params) => {
            (params.row?.status || null)
        }, 
        renderCell: (params) => {
            if (params.value === 'active') {
                return <Chip variant='outlined' size='small' {...getChipProps(params)} />;
            } else if (params.value === 'inactive') {
                return <Chip variant='outlined' size='small' {...getChipProps(params)} />;
            } else {
                return <span>{params.value}</span>;
            }
        }
    },
    { field: 'lease', headerName: 'Lease Availability', width: 150, editable: true,
    valueGetter: (params) => (params.row?.status?.lease || null),
    },
    { field: 'createdTime', headerName: 'Time Created', width: 150, editable: true, 
        valueGetter: (params) => (params.row?.creationTime || null),    
    },
    { field: 'description', headerName: 'Description', width: 300, editable: true, 
    valueGetter: (params) => (params.row?.name),},
    { field: 'actions', headerName: 'Actions', width: 150, editable: true,
    renderCell: (params) => {
        return (
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center'>
                <Box mr={1}>
                    <IconButton aria-label="delete" > 
                        <DeleteIcon 
                            onClick={ async () => {
                                const url = RESOURCE_URL + '/' + params.id;
                                console.log(url);
                                resp = await API.delete(url);
                                if (resp) {
                                    resp.then(
                                        console.log(resp)
                                    )
                                }
                                window.location.reload();
                            }
                        } />
                    </IconButton> 
                </Box>
                <Box mr={1}>
                    <IconButton aria-label="delete" > 
                        <AddIcon 
                        onClick={ async () => {
                            resp = await API.post(RESOURCE_URL);
                            if (resp) {
                                resp.then(
                                    console.log(resp)
                                )
                            }
                            window.location.reload();
                        }
                        }/>
                    </IconButton> 
                </Box>
                <Box mr={1}>
                    <IconButton aria-label="delete" > 
                        <SettingsIcon />
                    </IconButton> 
                </Box>
            </Box>
        );
    }
}
];

export default function InventoryDatagrid() {
    const [data, setData] = useState([]);
    const [datacenterData, setDatacenterData] = useState([]);
    const [ipaddresspoolData, setIpaddresspoolData] = useState([]);
    const [rackData, setRackData] = useState([]);
    const [serverData, setServerData] = useState([]);
    const [labData, setLabData] = useState([]);
    const [leaseData, setLeaseData] = useState([]);
    const [vlanData, setVlanData] = useState([]);
    const [switchData, setSwitchData] = useState([]);
    const [vmData, setVmData] = useState([]);


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [rows, setRows] = useState(null);



    const deleteRow = React.useCallback(async (params) => {
        const { rowData } = params;
        const { id } = rowData;
        const url = `${RESOURCE_URL}${id}`;
        const response = await axios.delete(url);
        if (response.status === 200) {
            const newData = data.filter(row => row.id !== id);
            setData(newData);
        }
    }
        , [data]);

    const toggleStatus = React.useCallback(async (params) => {
        const { rowData } = params;
        const { id } = rowData;
        const url = `${RESOURCE_URL}${id}/status`;
        const response = await axios.put(url);
        if (response.status === 200) {
            const newData = data.map(row => {
                if (row.id === id) {
                    row.status.state = row.status.state === 'active' ? 'inactive' : 'active';
                }
                return row;
            }
            );
            setData(newData);
        }
    }
        , [data]);
    
    const createRow = React.useCallback(async (params) => {
        const { rowData } = params;
        const { id } = rowData;
        const url = `${RESOURCE_URL}${id}/status`;
        const response = await axios.put(url);
        if (response.status === 200) {
            const newRow = {
                id: response.data.id,
                type: response.data.type,
                status: {
                    state: response.data.status.state,
                    fault: response.data.status.fault,
                    createdTime: response.data.status.createdTime,
                    lease: response.data.status.lease,
                }
            };
            const newData = [...data, newRow];
            setData(newData);
        }
    }
        , [data]);

    const updateRow = React.useCallback(async (params) => {
        const { rowData } = params;
        const { id } = rowData;
        const url = `${RESOURCE_URL}${id}`;
        const response = await axios.put(url);
        if (response.status === 200) {
            const newData = data.map(row => {
                if (row.id === id) {
                    row.type = response.data.type;
                    row.status.state = response.data.status.state;
                    row.status.fault = response.data.status.fault;
                    row.status.createdTime = response.data.status.createdTime;
                    row.status.lease = response.data.status.lease;
                }
                return row;
            }
            );
            setData(newData);
        }
    }
        , [data]);

    const setResourceData = async (data, resourceSetter, resourceType) => {
        if (data && data.data && data.data[resourceType]) {
            resourceSetter(data.data[resourceType].map((row) => {
                return {...row.meta, 'status' : row.status};
            }));
        }
    }

    const fetchAllData = async () => {
        try {
            const data = await API.get(
                RESOURCE_URL,
            );

            setResourceData(data, setDatacenterData, 'dc.datacenter')
            setResourceData(data, setIpaddresspoolData, 'network.ipAddressPool')
            setResourceData(data, setRackData, 'dc.rack')
            setResourceData(data, setLabData, 'dc.lab')
            setResourceData(data, setLeaseData, 'dc.datacenter')
            setResourceData(data, setServerData, 'compute.server')
            setResourceData(data, setSwitchData, 'network.switch')
            setResourceData(data, setVlanData, 'network.vlanPool')
            setResourceData(data, setVmData, 'compute.vm')
        }
        catch (e) {
            setError(e);
            setLoading(false);
        }
        finally {
            setLoading(false);
        }
        
        getResourceData()
    }

    useEffect(() => {
        setLoading(true);
        fetchAllData()
        setLoading(false);
    }
    , []);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        if (error.response.status === 401){
            localStorage.removeItem("authTokens");
            return <Navigate to='/login' />
        }
        return <div>Error: {error.message}</div>;
    }
    //console.log('dataCenterData: ', datacenterData);
    const testData = datacenterData.concat(ipaddresspoolData, rackData, labData, leaseData, serverData, switchData, vlanData, vmData);
   return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={ testData }
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        checkboxSelection
        disableSelectionOnClick
      components={{ Toolbar: GridToolbar }}
        componentsProps={{
            toolbar: {
               showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
            },
        }}
      />
    </Box>
  );
}