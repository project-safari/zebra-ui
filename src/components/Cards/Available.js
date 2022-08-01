import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Available Resources
        </Typography>
        <Typography variant="h5" component="div">
            3,045
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Available to Lease
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More Details</Button>
      </CardActions>
    </React.Fragment>
  );
  
  export default function Chart() {
    return (
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    );
  }