import * as React from 'react';
import Box from '@mui/material/Box';
import Header from '../Components/Header';
import NoteCard from '../Components/Cards'


export default function HomePage () {
   
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row', 
          alignItems: 'flex-start',
          backgroundColor: 'black'
          , 
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1, 
            gap: 2,  
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
            <NoteCard/>
          </Box>
        </Box>

    </Box>
  );
}