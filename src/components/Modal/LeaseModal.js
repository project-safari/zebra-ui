import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LeaseDatagrid from '../Datagrid/LeaseDatagrid';
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

export default function BasicModal() {
  const [openLease, setOpenLease] = React.useState(false);
  const handleOpenLease = () => setOpenLease(true);
  const handleCloseLease = () => setOpenLease(false);

  return (
    <div>
        <Button size="large" sx={{ml:10, mr: 34}} onClick={handleOpenLease}>View lease requests</Button>
        <Modal
          open={openLease}
          onClose={handleCloseLease}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 1350, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 12, p: 4}}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Current resource requests
            </Typography>
            <LeaseDatagrid />
            <Box sx={{display: 'flex', justifyContent: 'flex-end', mt: 2}}>
              <Button onClick={handleCloseLease} color="primary">
              </Button>
            </Box>
          </Box>
        </Modal>
    </div>
  );
}
