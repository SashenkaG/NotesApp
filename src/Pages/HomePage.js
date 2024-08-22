import * as React from 'react';
import Box from '@mui/material/Box';
import NoteCard from '../Components/Cards'


export default function HomePage () {
   
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row', 
          alignItems: 'flex-start',
          backgroundImage: 'url("https://media.istockphoto.com/id/594484448/vector/books-sketch-seamless.jpg?s=2048x2048&w=is&k=20&c=KjZ_Kr3eH0ljUPqhFnRKtlY1fTOE2zFP-aTw3VUTB0U=")',
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