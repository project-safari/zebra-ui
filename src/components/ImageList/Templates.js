import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function Templates() {
  return (
    <ImageList sx={{ width: 820, height: 800 }} cols = {3} rowHeight={200}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.template}
            loading="lazy"
          />
          <ImageListItemBar
            template={item.template}
            subtemplate={<span> {item.description}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://cdn-icons-png.flaticon.com/512/1925/1925155.png',
    template: 'Datacenter Basic',
    description: 'Creates a lease request for a basic datacenter configuration.',
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/6202/6202873.png',
    template: 'IP Address Pool Basic',
    description: 'Creates a lease request for a basic IP address pool configuration.',
  },
  {
    img: 'https://static.vecteezy.com/system/resources/thumbnails/006/607/453/small/client-server-in-isometric-style-icon-blockchain-technology-free-vector.jpg',
    template: 'Lab Basic',
    description: 'Creates a lease request for a basic lab configuration.',
  },
  {
    img: 'https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/rack_servers.png',
    template: 'Rack Basic',
    description: ' Creates a lease request for a basic rack configuration.',
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/1803/1803974.png',
    template: 'Server Basic',
    description: 'Creates a lease request for a basic server configuration.',
  },
  {
    img: 'http://cdn.onlinewebfonts.com/svg/img_458078.png',
    template: 'VLAN Pool Basic',
    description: 'Creates a lease request for a basic VLAN pool configuration.',
  },
  {
    img: 'https://icon-library.com/images/vm-icon/vm-icon-23.jpg',
    template: 'VM Basic',
    description: 'Creates a lease request for a basic VM configuration.',
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    template: 'User Created Template',
    description: 'Creates a lease request for a user created template.',
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    template: 'User Created Template',
    description: 'Creates a lease request for a user created template.',
  },
];