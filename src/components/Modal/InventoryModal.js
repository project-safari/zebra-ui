import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InventoryDatagrid from '../Datagrid/InventoryDatagrid';

/*
This is the modal being called that should show the inventory datagrid.
*/

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function InventoryModal() {
  const [openInventory, setOpenInventory] = React.useState(false);
  const handleOpenInventory= () => setOpenInventory(true);
  const handleCloseInventory = () => setOpenInventory(false);

  return (
    <div>
        <Button size="large" sx={{mr: 5, ml: 15}} onClick={handleOpenInventory}>View inventory</Button>
        <Modal
          open={openInventory}
          onClose={handleCloseInventory}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 1350, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4}}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Current User Inventory
            </Typography>
            <InventoryDatagrid />
            <Box sx={{display: 'flex', justifyContent: 'flex-end', mt: 2}}>
              <Button onClick={handleCloseInventory} color="primary">
              </Button>
            </Box>
          </Box>
        </Modal>
    </div>
  );
}
