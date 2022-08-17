import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SinglePieChart from '../Charts/SinglePieChart';

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

export default function AnomalyModal() {
  const [openLease, setOpenLease] = React.useState(false);
  const handleOpenLease = () => setOpenLease(true);
  const handleCloseLease = () => setOpenLease(false);

  return (
    <div>
        <Button size="large" sx={{ mr: 30}} onClick={handleOpenLease}>View anomalies</Button>
        <Modal
          open={openLease}
          onClose={handleCloseLease}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 750, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4}}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Anomaly Breakdown
            </Typography>
           <SinglePieChart/>
            <Box sx={{display: 'flex', justifyContent: 'flex-end', mt: 2}}>
              <Button onClick={handleCloseLease} color="primary">
              </Button>
            </Box>
          </Box>
        </Modal>
    </div>
  );
}
