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
import InventoryLineChart from '../Charts/LineChart';

const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]
  


const card = (
    <React.Fragment>
      <CardContent>
      <Box sx={{ display: 'inline-block', width: '30%' }}>

        <Typography sx={{ fontSize: 20, fontWeight: 1000 }} color="#065073" gutterBottom >
          Zebra System Traffic
        </Typography>
            <Typography sx={{ fontSize: 50, fontWeight: 1000 }} color="#599E05" gutterBottom >
            Healthy
            </Typography>
            <InventoryLineChart />
        <Typography sx={{ mb: 2, }} color="text.secondary">
            No systems under your management require attention.
        </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="large">More Details</Button>
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
    };
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
              <ResourceDatagrid />  
          </CardContent>
        </Collapse>
        </Card>
      </Box>
    );
  }