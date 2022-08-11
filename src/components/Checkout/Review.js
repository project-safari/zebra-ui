import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const request = [
  {
    name: '3 Node nd-Cluster',
    desc: 'A basic template for starting a 3 node nd-Cluster',
    count: '1',
  },

  { name: 'Status', desc: '', count: 'Pending' },
];



export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {request.map((requests) => (
          <ListItem key={requests.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={requests.name} secondary={requests.desc} />
            <Typography variant="body2">{requests.count}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Time" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            4 hours
          </Typography>
        </ListItem>
      </List>
    
    </React.Fragment>
  );
}