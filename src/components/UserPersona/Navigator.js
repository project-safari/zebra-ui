import React from 'react';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import { useNavigate } from 'react-router-dom';



const categories = [
  {
    id: 'Reservations',
    children: [
      {
        id: 'Project Build',
        icon: <PeopleIcon />,
        active: true,
      },
      { id: 'Inventory', icon: <DnsRoundedIcon /> },
      { id: 'Lease', icon: <PermMediaOutlinedIcon /> },
    ],
  },
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};


export default function Navigator(props) {
  const { ...other } = props;
  const navigate = useNavigate();


  const handleClick = (e) => {
    navigate(e.target.getAttribute('href'));
  }

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 30, color: '#fff', fontFamily: '-apple-system', fontWeight: 'bold'  }}>
          <ListItemIcon>
            <CloudCircleIcon />
          </ListItemIcon>
          Zebra
        </ListItem>
        <Link href="/" onClick={handleClick} underline="none" color="inherit" >
          <ListItem sx={{ ...item, ...itemCategory }} >
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText>Project Overview</ListItemText>
          </ListItem>
        </Link>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#015073' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <Link href={`/${childId}`} onClick={handleClick} underline="none" color="inherit" key={childId}>
                <ListItem disablePadding key={childId}>
                  <ListItemButton selected={active} sx={item} >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}