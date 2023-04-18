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

/*
This card is used for displaying the active leases the user has, 
inventory under management, and any system faults.
*/



  export default function Chart() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

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
    }
    , []);
    
    return (
      <Box sx={{ minWidth: 275, p: 4.5, }}>
        <Card variant="outlined">
          {
            <React.Fragment>
              <CardContent>
                <Grid container spacing={0}>
                    <Box sx={{ display: 'inline-block', width: '45%', p: 1.5,}}>
                        <Typography sx={{ fontSize: 25, fontWeight: 1000, ml: 15 }} color="#065073" gutterBottom >
                        Current Lease Requests
                        </Typography>
                            <Typography sx={{ fontSize: 100, fontWeight: 1000, ml: 27, mt: 0.5,}} color="#599E05" gutterBottom >
                              {count}
                            </Typography>
                        <Typography sx={{ mr:2 }} color="text.secondary">
                            You currently have {count} ongoing lease request. To manage or add leases, click below.
                        </Typography>
                    </Box>
                    <Divider orientation="vertical" variant='middle' flexItem/>
                    <Box sx={{ display: 'inline-block', width: '45%', p: 1.5, ml: 7}}>
                        <Typography sx={{ fontSize: 25, fontWeight: 1000, ml: 15 }} color="#065073" gutterBottom >
                        Systems Under Management
                        </Typography>
                            <Typography sx={{ fontSize: 100, fontWeight: 1000, ml: 23, mt: 0.5,}} color="#599E05" gutterBottom >
                            800
                            </Typography>
                        <Typography sx={{ mr:0 }} color="text.secondary">
                            You currently have 800 systems assigned to you. To manage or add systems, click below.
                        </Typography>
                    </Box>
                </Grid>
              </CardContent>
              <CardActions>
                <BasicModal />
                
                <InventoryModal />
              </CardActions>
            </React.Fragment>
          }
        </Card>
      </Box>
    );

    /*
                    <Divider orientation="vertical" variant='middle' flexItem />
                    <Box sx={{ display: 'inline-block', width: '30%', p: 1.5, ml: 7}}>
                        <Typography sx={{ fontSize: 25, fontWeight: 1000, ml: 11 }} color="#065073" gutterBottom >
                        Anomalies
                        </Typography>
                            <Typography sx={{ fontSize: 100, fontWeight: 1000, ml: 15, mt: 0.5,}} color="#B63722" gutterBottom >
                            5
                            </Typography>
                        <Typography sx={{ mr:2 }} color="text.secondary">
                            You currently have 5 anomalies in your systems. To review anomalies, click below.
                        </Typography>
                    </Box>
*/
  }