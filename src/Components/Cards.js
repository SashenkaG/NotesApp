import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

  <Box
    component="span"
    sx={{
        display: 'flex',
        flexDirection: 'column', 
        flexWrap: 'wrap',
        alignItems: 'flex-start', 
        '& > :not(style)': {
          m: 1, 
          width: 100, 
          height: 300, }}
        }
  >
    •
  </Box>


const cardData = [
    {
      title: 'Current Note',
      createdDate : new Date(),
      details: 'Today I ate a sandwitch',
    },
    {
      title: 'Another Note',
      createdDate : new Date(),
      details: 'able to withstand or recover quickly from difficult conditions. "a resilient person"',
    },
    {
      title: 'Another Note',
      createdDate : new Date(),
      details: 'diligent and hardworking. "an industrious student"',
    },
  ];
export default function BasicCard({ title, createdDate, details, handleButtonClick }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {cardData.map((card, index) => (
            <Card key={index} sx={{ minWidth: 350 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="h5" component="div">
                  {cardData.createdDate}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {cardData.details}
                </Typography>
              </CardContent>
              <CardActions>
              <Button size="small" onClick={handleButtonClick}>View</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      );
    }
