import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Header from './Header';
import Cards from './Cards'
import BasicCard from './Cards';




export default function SimplePaper() {
    const [details, setDetails] = useState('');

    const handleButtonClick = (details) => {
        setDetails(details);
      };

    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row', // Arrange items in a row
          alignItems: 'flex-start', // Align items at the start of the cross-axis
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1, // Allow this Box to take up remaining space
            gap: 2,  // Optional: Add spacing between items
          }}
        >
          <Header />  {/* Header component */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-start', 
            }}
          >
            <BasicCard title="" content="" onClick={handleButtonClick}/>  {/* Cards component */}
          </Box>
        </Box>
  
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start', // Align the Paper at the start
            '& > :not(style)': {
              m: 5,
              width: 1100,
              height: 800,
            },
          }}
        >
          <Paper variant="outlined" />
          
        </Box>
      </Box>
    );
  }
