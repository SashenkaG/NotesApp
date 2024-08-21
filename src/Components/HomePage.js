import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Header from './Header';
import NoteCard from './Cards'

import Typography from '@mui/material/Typography';


export default function HomePage () {
  const [selectedCard, setSelectedCard] = useState(null);

  const ViewClick = (card) => {
    setSelectedCard(card);
  };
   
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row', 
          alignItems: 'flex-start', 
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
          {/* <Paper variant="outlined" sx={{ p: 2 }}>
          {selectedCard ? (
            <>
              <Typography variant="h6">{selectedCard.title}</Typography>
              <Typography variant="body1">{selectedCard.details}</Typography>
            </>
          ) : (
            <Typography variant="body1">Select a card to view details</Typography>
          )}
        </Paper> */}
      </Box>
    </Box>
  );
}