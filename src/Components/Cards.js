import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ViewNoteDetailsCard from './ViewNoteDetailsCard';

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
      createdDate : "Date",
      details: 'Some notes are written here',
    },
    {
      title: 'Another Note',
      createdDate :"Date",
      details: 'Different notes are written here',
    },
    {
      title: 'Another Note',
      createdDate : "Date",
      details: 'More notes are written here',
    },
  ];
export default function NoteCard() {
  const [data, setData] = React.useState()
  const [isDetailCardShow, setIsDetailCardShow] = React.useState(false)

  const handleCardClick = (card) => {
    console.log("Card Details:", card);
    setData(card);
    setIsDetailCardShow(true);
  };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px',  }}>
          {cardData.map((card, index) => (
            <Card key={index} sx={{ minWidth: 350 ,border: '3px solid', borderColor: '#ce93d8'}}>
              <CardContent>
                <Typography sx={{ fontSize: 20 }} color="bold" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="subtitle1" component="div">
                  {card.createdDate}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {card.details}
                </Typography>
              </CardContent>
              <CardActions>
              <Button size="small" onClick= {()=>handleCardClick(card)}>View</Button>
              </CardActions>
            </Card>
          ))}
           {isDetailCardShow && data && (
        <ViewNoteDetailsCard
          title={data.title} createdDate={data.createdDate} details={data.details}/>
      )}
    </div>
       
      );
    }
