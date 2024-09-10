import React from 'react';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const ViewNoteDetailsCard = ({ title, createdDate, details, handleClose }) => {
  return (
    <Paper
        variant="outlined"
        sx={{
          position: "absolute",
          right: 7,
          top: "30px",
          height: "530px",
          width: "1000px",
          padding: "16px",
          margin: "5px",
          border: "3px solid",
          borderColor: "#66b3ff",
          backgroundColor: "#f9f9f9", 
          borderRadius: "8px", 
        }}
      >
      <div>
        <IconButton onClick={handleClose}> 
          <CloseIcon  
            sx={{ 
              fontSize: 20, 
              backgroundColor: '#ff3333', 
              color: 'white', 
              padding: '0.2px', 
              position: 'absolute', 
              display: 'block'
            }} 
          />
        </IconButton> 
      </div>
      <div>
        <Typography variant="h1" component="h5" sx={{ fontSize: 30, marginTop:'20px',marginLeft:'30px' }}>
          {title}
        </Typography>
        <Typography variant="body1" sx ={{marginLeft:'30px'}}>
          <strong>Date Created:</strong> {createdDate}
        </Typography>
        <Typography variant="body1"sx ={{marginLeft:'30px'}}>
          <strong>Details:</strong> {details}
        </Typography>
      </div>
    </Paper>
  );
};

export default ViewNoteDetailsCard;
