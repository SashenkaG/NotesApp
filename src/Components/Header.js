import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';


export default function Header({handleAddCard}) {
    return (
      <Box
        sx={{
          width: '100%',
          color :'black',
          padding: 1,
          borderRadius:'20px',
          marginBottom: 2,
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', 
          gap: 12, 
        }}
      >
        <Typography variant="h3" sx={{backgroundColor:'white', padding: '4px', borderRadius:'20px'}}>Notes</Typography>
        <IconButton onClick={handleAddCard}>
        <AddIcon sx={{ fontSize: 40, backgroundColor: '#1a66ff', color: 'White', borderRadius:'20px' }} />
      </IconButton> 
      </Box>
    );
  }