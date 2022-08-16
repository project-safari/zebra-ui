import React from 'react';
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
import { Grid } from '@mui/material';



const card = (
    <React.Fragment>
      <CardContent>
        <Grid container spacing={0}>
            <Box sx={{ display: 'inline-block', width: '30%', p: 1.5,}}>
                <Typography sx={{ fontSize: 25, fontWeight: 1000, ml: 2 }} color="#065073" gutterBottom >
                Current Lease Requests
                </Typography>
                    <Typography sx={{ fontSize: 100, fontWeight: 1000, ml: 15, mt: 0.5,}} color="#D9B216" gutterBottom >
                    1
                    </Typography>
                <Typography sx={{ mr:2 }} color="text.secondary">
                    You currently have one ongoing lease request. To manage or add leases, click below.
                </Typography>
            </Box>
            <Box sx={{ display: 'inline-block', width: '30%', p: 1.5, ml: 7}}>
                <Typography sx={{ fontSize: 25, fontWeight: 1000, ml: 11 }} color="#065073" gutterBottom >
                Anomalies
                </Typography>
                    <Typography sx={{ fontSize: 100, fontWeight: 1000, ml: 15, mt: 0.5,}} color="#599E05" gutterBottom >
                    0
                    </Typography>
                <Typography sx={{ mr:2 }} color="text.secondary">
                    You currently have one ongoing lease request. To manage or add leases, click below.
                </Typography>
            </Box>
            <Box sx={{ display: 'inline-block', width: '30%', p: 1.5, ml: 7}}>
                <Typography sx={{ fontSize: 25, fontWeight: 1000, ml: 1 }} color="#065073" gutterBottom >
                Systems Under Management
                </Typography>
                    <Typography sx={{ fontSize: 100, fontWeight: 1000, ml: 12.5, mt: 0.5,}} color="#B63722" gutterBottom >
                    12
                    </Typography>
                <Typography sx={{ mr:2 }} color="text.secondary">
                    You currently have 12 systems assigned to your group. To manage or add systems, click below.
                </Typography>
            </Box>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="large" sx={{ml:10, mr: 34}}>View resource requests</Button>
        <Button size="large" sx={{ml:10, mr: 40}}>View anomalies</Button>
        <Button size="large" sx={{mr:10}}>View Inventory</Button>

      </CardActions>
    </React.Fragment>
  );



  export default function Chart() {

    return (
      <Box sx={{ minWidth: 275, p: 4.5, }}>
        <Card variant="outlined">
          {card}

        </Card>
      </Box>
    );
  }