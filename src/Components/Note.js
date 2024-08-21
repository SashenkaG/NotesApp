import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Header from './Header';
import Cards from './Cards'


export default function SimplePaper() {
  return (
    <Box><Header></Header>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        '& > :not(style)': {
          m: 5,
          width: 1100,
          height: 800,
        },
      }}
    >
      <Paper variant="outlined"/>
    </Box>
    </Box>
    
  );
}
