import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';

export default function Header() {
    return (
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#f5f5f5',
          padding: 2,
          marginBottom: 2,
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', 
          gap: 1, 
        }}
      >
        <Typography variant="h4">Notes</Typography>
        <AddIcon sx={{ fontSize: 40 }} /> 
      </Box>
    );
  }