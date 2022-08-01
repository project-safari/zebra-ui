import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ResourceComposedChart from '../Charts/ComposedChart';
import { maxWidth } from '@mui/system';
const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Critical Faults
        </Typography>
        <Typography variant="h5" component="div">
            15
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Systems
        </Typography>
        <ResourceComposedChart />
      </CardContent>
      <CardActions>
        <Button size="small">More Details</Button>
      </CardActions>
    </React.Fragment>
  );
  
  export default function Health() {
    return (
      <Box sx={{ minWidth: 250, maxWidth: 700 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    );
  }