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
          backgroundImage: 'url("https://as1.ftcdn.net/v2/jpg/07/56/34/40/1000_F_756344053_cfhoRDh5aeHfPNcDcC44zE7zWkhXDH9q.jpg")',
          backgroundSize:'cover',
          minHeight: '100vh',
          backgroundAttachment: 'fixed'
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