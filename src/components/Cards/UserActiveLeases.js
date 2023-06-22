import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import ResourceDatagrid from '../Datagrid/ResourceDatagrid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ResourceComposedChart from '../Charts/ComposedChart';
import { Grid, Modal } from '@mui/material';
import Divider from '@mui/material/Divider';
import BasicModal from '../Modal/LeaseModal';
import AnomalyModal from '../Modal/AnomalyModal';
import InventoryModal from '../Modal/InventoryModal';
import API from '../../api/Api';
import { RESOURCE_URL } from '../../constants/urls';
import  InventoryDatagrid from "../Datagrid/InventoryDatagrid"
/*
This card is used for displaying the active leases the user has, 
inventory under management, and any system faults.
*/

let resNumber;
// resNumber =  InventoryDatagrid.data.length
// resNumber = 21
// pageRows.length - 1
// resNumber = InventoryDatagrid.getrows().length

// resNumber = InventoryDatagrid.rows.getrows().length

resNumber = InventoryDatagrid.data
  
// let anomalyCount;
// anomalyCount = 0;

  export default function Chart() {
    const [count, setCount]= useState(0);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const  [invCount, resCount]= useState(0);
    
    const  [anomalyCount, badCount]= useState(0);


    const getAnomaly = async () => {
      try {
          const data = await API.get(
              RESOURCE_URL, {
          }
          );
          setData(data.data.AnomalyModal);
          console.log(data.data.AnomalyModal.length);
          badCount(data.data.AnomalyModal.length);
          console.log(anomalyCount);
          }
      catch (e) {
          setError(e);
          setLoading(false);
      }
      setLoading(false);
    }

    const getRes = async () => {
      try {
          const data = await API.get(
              RESOURCE_URL, {
          }
          );
          setData(data.data.InventoryModal);
          console.log(data.data.InventoryModal.length);
          resCount(data.data.InventoryModal.length);
          console.log(invCount);
          }
      catch (e) {
          setError(e);
          setLoading(false);
      }
      setLoading(false);
    }

    const getData = async () => {
      try {
          const data = await API.get(
              RESOURCE_URL, {
          }
          );
          setData(data.data.Lease);
          console.log(data.data.Lease.length);
          setCount(data.data.Lease.length);
          console.log(count);
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
        getRes();
        getAnomaly();
    }
    , []);
    
      return (
      <Box sx={{ minWidth: 275, p: 4.5, }}>
        <Card variant="outlined">
          {
            <React.Fragment>
              <CardContent>
                <Grid container spacing={0}>
                    <Box sx={{ display: 'inline-block', width: '30%', p: 1.5,}}>
                        <Typography sx={{ fontSize: 25, fontWeight: 1000, ml: 2 }} color="#065073" gutterBottom >
                        Current Lease Requests
                        </Typography>
                            <Typography sx={{ fontSize: 100, fontWeight: 1000, ml: 15, mt: 0.5,}} color="#599E05" gutterBottom >
                              {count}
                            </Typography>
                        <Typography sx={{ mr:2 }} color="text.secondary">
                            You currently have {count} ongoing lease request. To manage or add leases, click below.
                        </Typography>
                    </Box>
                    <Divider orientation="vertical" variant='middle' flexItem />
                    <Box sx={{ display: 'inline-block', width: '30%', p: 1.5, ml: 7}}>
                        <Typography sx={{ fontSize: 25, fontWeight: 1000, ml: 11 }} color="#065073" gutterBottom >
                        Anomalies
                        </Typography>
                            <Typography sx={{ fontSize: 100, fontWeight: 1000, ml: 15, mt: 0.5,}} color="#B63722" gutterBottom >
                            {anomalyCount}
                            </Typography>
                        <Typography sx={{ mr:2 }} color="text.secondary">
                            You currently have {anomalyCount} anomalies in your systems. To review anomalies, click below.
                        </Typography>
                    </Box>
                    <Divider orientation="vertical" variant='middle' flexItem/>
                    <Box sx={{ display: 'inline-block', width: '30%', p: 1.5, ml: 7}}>
                        <Typography sx={{ fontSize: 25, fontWeight: 1000, ml: 1 }} color="#065073" gutterBottom >
                        Systems Under Management
                        </Typography>
                            <Typography sx={{ fontSize: 100, fontWeight: 1000, ml: 11, mt: 0.5,}} color="#599E05" gutterBottom >
                            {invCount}
                            </Typography>
                        <Typography sx={{ mr:2 }} color="text.secondary">
                            You currently have {invCount} systems assigned to you. To manage or add systems, click below.
                        </Typography>
                    </Box>
                </Grid>
              </CardContent>
              <CardActions>
                <BasicModal />
                <AnomalyModal />
                <InventoryModal />
              </CardActions>
            </React.Fragment>
          }
        </Card>
      </Box>
    );
  }
  