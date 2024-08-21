import React from 'react';
import Paper from '@mui/material/Paper';

const ViewNoteDetailsCard = ({ title, createdDate, details }) => {
  return (
    <Paper 
      variant="outlined" 
      sx={{ 
        position: 'absolute',
        right: 0,
        top: '60px',  
        height: '600px',
        width: '1000px',  
        padding: '16px',  
        margin: '30px',
        border: '1px solid rgba(0, 0, 0, 0.6)',    
        backgroundColor: '#fff'
      }}
    >
      <div>
        <h2>{title}</h2>
        <p><strong>Date Created:</strong> {createdDate}</p>
        <p><strong>Details:</strong> {details}</p>
      </div>
    </Paper>
  );
};

export default ViewNoteDetailsCard;
