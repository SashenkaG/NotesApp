import React from 'react';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

const ViewNoteDetailsCard = ({ title, createdDate, details }) => {
  return (
    <div>
    <Paper 
      variant="outlined" 
      sx={{ 
        position: 'absolute',
        right: 0,
        top: '30px', 
        height: '600px',
        width: '1000px',  
        padding: '16px',  
        margin: '5% 5% 5% 5%',
        border: '3px solid',  
        borderColor : '#ce93d8',  
        backgroundColor: '#fff'
      }}
    >
      <div>
      <IconButton>
        <CloseIcon  sx={{ fontSize: 20, backgroundColor: 'red', color: 'white', padding: '0.5px', position: 'absolute', display:'block'}} />
      </IconButton> 
      </div>
      <div>
        <h2>{title}</h2>
        <p><strong>Date Created:</strong> {createdDate}</p>
        <p><strong>Details:</strong> {details}</p>
      </div>
      </Paper>
      <Button variant="contained" sx={{position: 'absolute',top:'680px', right: '600px',}}>
        Save</Button>
      </div>
  );
};

export default ViewNoteDetailsCard;
