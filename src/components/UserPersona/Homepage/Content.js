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
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search for templates"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default' },
                }}
                variant="standard"
              />
            </Grid>
            <Grid item>
              <Button variant="contained" sx={{ mr: 1 }} onClick={handleOpen}>
                Add Lease Template
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
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        You have no active lease requests pending.
      </Typography>
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        Start a Lease Request from your saved templates below, or create a new lease request.
      </Typography>
      <Grid container spacing={4}  >
        <Grid item>
          <Active />
        </Grid>
        <Grid item>
          <Active />
        </Grid>
        <Grid item>
          <Active />
        </Grid>
        <Grid item>
          <Active />
        </Grid>
        <Grid item>
          <Active />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
        <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
          This is all of the Inventory managed by your organization.
        </Typography>
          <ResourceDatagrid />
        </Grid>
      </Grid>
    </Paper>
  );
}