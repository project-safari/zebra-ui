import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SettingsIcon from '@mui/icons-material/Settings';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { red, green } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import renderCellExpand from '../../utils/renderCellExpand';
import { RESOURCE_URL } from '../../constants/urls';
import API from '../../api/Api';
import axios from 'axios';



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
    { field: 'id', headerName: 'Lease ID', width: 150, editable: true },
    { field: 'type', headerName: 'Resource Type', width: 150, editable: true, },
    { field: 'state', headerName: 'Status', width: 150, editable: true, 
        valueGetter: (params) => params.row.status.state,
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
    { field: 'request', headerName: 'Request', width: 400, editable: true, 
        valueGetter: (params) => JSON.stringify(params.row.request),
    },
    { field: 'createdTime', headerName: 'Time Created', width: 150, editable: true, 
        valueGetter: (params) => params.row.status.createdTime,    
    },
    { field: 'lease', headerName: 'Lease Availability', width: 125, editable: true,
        valueGetter: (params) => params.row.status.lease,
    },
    { field: 'actions', headerName: 'Actions', width: 100, editable: true,
        renderCell: (params) => {
            return (
                <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center'>
                    <Box mr={1}>
                        <IconButton aria-label="delete" > 
                            <DeleteIcon 
                                onClick={ async () => {
                                    await axios.delete(RESOURCE_URL,
                                        { data: { name: params.row.name } }
                                    );                                }
                            } />
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

export default function LeaseDatagrid() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [rows, setRows] = useState(null);
    const [count, setCount] = useState(0);


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
        } else {
            setError(response.data);
        }
    }
        , [data]);


    const getData = async () => {
        try {
            const data = await API.get(
                RESOURCE_URL, {
            }
            );
            setData(data.data.Lease);
            setCount(data.data.Lease.length);
            }
        catch (e) {
            setError(e);
            setLoading(false);
        }
        setLoading(false);
    }
    useEffect(() => {
        setLoading(true);
        getData();
    }
    , []);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }



  return (
    <Box sx={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={ data }
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[10]}
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
