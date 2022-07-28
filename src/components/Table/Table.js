import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

export default function InventoryTable() {
    const inventory = [];
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const columns = [
        { name: 'type', label: 'Resource Type' },
        { name: 'fault', label: 'Fault State' },
        { name: 'state', label: 'Status' },
        { name: 'createdTime', label: 'Time Created' },
        { name: 'lease', label: 'Lease Availability' },

    ];
    const rows = [
        { type: 'Datacenter', status: { fault: '', state: '', createdTime: '', lease: '' } },
    ];

    const getData = async () => {
        try {
            const data = await axios.get(
                'http://localhost:9999/api/v1/resources'
            );
            setData(data.data.Datacenter);
            // console.log(data.data.Datacenter);
            // setData(data.data.Datacenter.map(item => item.status, item))
            // console.log(data.data.Datacenter.item.fault);

            for (var i=0; i<data.data.Datacenter.length; i++) {
                inventory.push(data.data.Datacenter[i].type, data.data.Datacenter[i].status.fault, data.data.Datacenter[i].status.state, data.data.Datacenter[i].status.createdTime, data.data.Datacenter[i].status.lease);
                /* 
                console.log(data.data.Datacenter[i].type)
                console.log(data.data.Datacenter[i].status.fault)
                console.log(data.data.Datacenter[i].status.state)
                console.log(data.data.Datacenter[i].status.createdTime)
                console.log(data.data.Datacenter[i].status.lease)
                */
            }
            console.log(inventory)
            setLoading(false);
        } catch (e) {
            setError(e);
            setLoading(false);
            console.log(e);
        }
    }

    useEffect(() => {
        setLoading(true);
        getData();
        
    }, []);
    if (loading) {
        return <p>Loading...</p>;
    }   else if (error) {
        return <p>Error: {error.message}</p>;
    }
    return (
        <Table>
            <TableHead>
                <TableRow>
                    {columns.map(column => (
                        <TableCell key={column.name}>{column.label}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map(row => (
                    <TableRow key={row.type}>
                        <TableCell>{row.type}</TableCell>
                        <TableCell>{row.status.fault}</TableCell>
                        <TableCell>{row.status.state}</TableCell>
                        <TableCell>{row.status.createdTime}</TableCell>
                        <TableCell>{row.status.lease}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}