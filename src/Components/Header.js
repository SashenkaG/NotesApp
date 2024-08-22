import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

export default function Header() {
    return (
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#b300b3',
          color :'white',
          padding: 1,
          marginBottom: 2,
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', 
          gap: 12, 
        }}
      >
        <Typography variant="h3">Notes</Typography>
        <IconButton>
        <AddIcon sx={{ fontSize: 40, backgroundColor: '#1a66ff', color: 'White', borderRadius:'20px' }} />
      </IconButton> 
      </Box>
    );
  }