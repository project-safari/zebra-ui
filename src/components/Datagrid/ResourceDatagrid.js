import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
    { field: 'type', headerName: 'Resource Type', width: 150, editable: true, },
    { field: 'fault', headerName: 'Fault State', width: 150, editable: true, 
        valueGetter: (params) => params.row.status.fault, 
    },
    { field: 'state', headerName: 'Status', width: 150, editable: true, 
        valueGetter: (params) => params.row.status.state,
        renderCell: (params) => {
            if (params.value === 'active') {
                return <span style={{ color: 'green' }}>{params.value} </span>;
            } else if (params.value === 'inactive') {
                return <span style={{ color: 'red' }}>{params.value}</span>;
            } else {
                return <span>{params.value}</span>;
            }
        }
    },
    { field: 'createdTime', headerName: 'Time Created', width: 150, editable: true, 
        valueGetter: (params) => params.row.status.createdTime,    
    },
    { field: 'lease', headerName: 'Lease Availability', width: 150, editable: true,
        valueGetter: (params) => params.row.status.lease,
    },
];




export default function ResourceDatagrid() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const data = await axios.get(
                'http://localhost:9999/api/v1/resources'
            );
            setData(data.data.Datacenter);
            console.log(data.data.Datacenter[0].status);
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
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={ data }
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}