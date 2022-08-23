import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <CardMedia
        component="img"
        sx={{ width: 180 }}
        image={require("../../assets/img/Zebra-icon.png")}
        alt="Zebra Lease Logo"
      />
          <Typography component="div" variant="h5">
            Favorited Leases
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Zebra 3-nd node Template
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 5.5, pb: 1 }}>
          <IconButton aria-label="previous">
            <CloseIcon/>
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            <SettingsIcon/>
          </IconButton>
        </Box>
      </Box>
    </Card>
    
  );
}