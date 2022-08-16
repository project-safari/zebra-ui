import React from 'react';
import Box from '@mui/material/Box';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import SyncIcon from '@mui/icons-material/Sync';
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
            <Box sx={{ display: 'inline-block', width: '25%', p: 1.5,}}>

                <Typography sx={{ fontSize: 25, fontWeight: 1000 }} color="#065073" gutterBottom >
                Zebra System Advisories
                </Typography>
                    <Typography sx={{ fontSize: 100, fontWeight: 1000, ml: 3, mt: 0.5,}} color="#B63722" gutterBottom >
                    4
                    </Typography>
                <Typography sx={{ mr:2 }} color="text.secondary">
                    4 total advisories, 1 critical, 1 warning, 2 informational.
                </Typography>
            </Box>
            <Box sx={{ display: 'inline-block', width: '70%', }}>
                <Typography sx={{ fontSize: 25, fontWeight: 1000, ml:43, mt: 1.5 }} color="#065073" gutterBottom >
                Suggested Actions
                </Typography>
                <Typography sx={{ fontSize: 20, fontWeight: 500, ml:43, mt: 1.5 }} color="text.secondary" gutterBottom >
                <IconButton sx={{ px:2, py: 3, color:'#B63722', }}>
                    <TrendingUpIcon sx={{fontSize: 40}} />
                </IconButton>
                Trending Higher
                </Typography>
                <Typography sx={{ fontSize: 15, fontWeight: 250, ml:52, }} color="text.secondary" gutterBottom >
                 The number of daily advisories is higher than average.
                </Typography>
                <Typography sx={{ fontSize: 20, fontWeight: 500, ml:43, mt: 1.5 }} color="text.secondary" gutterBottom >
                <IconButton sx={{ px:2, py: 3, color:'#599E05'}}>
                    <UpgradeIcon sx={{fontSize: 40}}/>
                </IconButton>
                Upgrades Available
                </Typography>
                <Typography sx={{ fontSize: 15, fontWeight: 250, ml:52, }} color="text.secondary" gutterBottom >
                 Make sure your setups are running the latest software.
                </Typography>
                <Typography sx={{ fontSize: 20, fontWeight: 500, ml:43, mt: 1.5, }} color="text.secondary" gutterBottom >
                <IconButton sx={{ px:2, py: 3, color:'#D9B216'}}>
                    <SyncIcon sx={{fontSize: 40}}/>
                </IconButton>
                Restart the Physical Setups
                </Typography>
                <Typography sx={{ fontSize: 15, fontWeight: 250, ml:52, }} color="text.secondary" gutterBottom >
                 Could be an error with the setup wiring.
                </Typography>
            </Box>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="large">View all advisories</Button>
      </CardActions>
    </React.Fragment>
  );

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  export default function Chart() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    }
    return (
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          {card}
            <CardActions disableSpacing>
              <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              >
              <ExpandMoreIcon />
              </ExpandMore>
          </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
              <ResourceComposedChart />  
          </CardContent>
        </Collapse>
        </Card>
      </Box>
    );
  }