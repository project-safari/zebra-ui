import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import Active from '../../Cards/Active';
import ResourceDatagrid from '../../Datagrid/ResourceDatagrid';
import UserInventory from '../../Cards/UserInventory';
import UserAnomalies from '../../Cards/UserAnomalies';
import UserActiveLeases from '../../Cards/UserActiveLeases';
import BasicModal from '../../Modal/Modal';
import Template from '../../Cards/Template';

export default function Content() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Paper sx={{ maxWidth: 1400, margin: 'auto', overflow: 'hidden' }}>
      <Typography variant="h6" gutterBottom align='center' sx={{fontWeight: 1000, color: '#065073', fontSize: 25}}>
        Welcome to the Zebra System Management Dashboard
      </Typography>

      <UserActiveLeases />

      <Grid container>
        <Grid item xs sx={{ p: 4.5, }}>
          <UserInventory />
        </Grid>
        <Grid item xs sx={{ p: 4.5, }}>
          <UserAnomalies />
        </Grid>
      </Grid>

    </Paper>
  );
}