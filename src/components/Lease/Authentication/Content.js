
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
import InventoryTable from '../../Table/Table';
import ResourceDatagrid from '../../Datagrid/ResourceDatagrid';
import Available from '../../Cards/Available';
import Health from '../../Cards/Health';
import Status from '../../Cards/Status'

export default function Content() {
  return (
    <Paper sx={{ maxWidth: 1400, margin: 'auto', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
      <Grid container spacing={3}  justifyContent="space-between">
        <Grid item>
          <Available />
        </Grid>
        <Grid item xs>
          <Health />
        </Grid>
        <Grid item>
          <Status />
        </Grid>
      </Grid>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by resource type, state, creation, or availability"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default' },
                }}
                variant="standard"
              />
            </Grid>
            <Grid item>
              <Button variant="contained" sx={{ mr: 1 }}>
                Add Resource
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2}>
        <Grid item xs>
          <ResourceDatagrid />
        </Grid>
      </Grid>
    </Paper>
  );
}