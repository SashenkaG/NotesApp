import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Header() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#f5f5f5',
        padding: 2,
        marginBottom: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant="h4">Notes</Typography>
    </Box>
  );
}
