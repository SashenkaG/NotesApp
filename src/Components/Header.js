import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';


export default function Header({handleAddCard}) {
    return (
      <Box
        sx={{
          width: '95%',
          color :'white',
          padding: 1,
          backgroundColor:'#00b3b3',
          borderRadius:'20px',
          border: '3px solid',
          borderColor:'black',
          marginBottom: 1,
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', 
          gap: 11, 
        }}
      >
        <Typography variant="h2" sx={{backgroundColor:'#00b3b3', padding: '4px', borderRadius:'20px', border:'2px', borderColor:'black'}}>Notes</Typography>
        <IconButton onClick={handleAddCard}>
        <AddIcon sx={{ fontSize: 40, backgroundColor: '#1a66ff', color: 'White', borderRadius:'20px' }} />
      </IconButton> 
      </Box>
    );
  }