import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from './Header';

const initialCardData = [
  {
    id: 1,
    title: 'Current Note',
    createdDate: 'Date',
    details: 'Some notes are written here',
  },
  {
    id: 2,
    title: 'Another Note',
    createdDate: 'Date',
    details: 'Different notes are written here',
  },
  {
    id: 3,
    title: 'Another Note',
    createdDate: 'Date',
    details: 'More notes are written here',
  },
];

export default function NoteCard() {
  const [data, setData] = useState(null);
  const [isDetailCardShow, setIsDetailCardShow] = useState(false);
  const [newCardData, setNewCardData] = useState(initialCardData);
  const [editCard, setEditCard] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleAddCard = () => {
    const newCard = {
      id: Date.now(),
      title: 'Title',
      createdDate: 'Date',
      details: 'Type your Notes here',
    };
    setNewCardData([...newCardData, newCard]);
    handleEditClick(newCard); // Open the new card in edit mode
  };

  const handleCardClick = (card) => {
    setData(card);
    setIsDetailCardShow(true);
    setIsEditMode(false);
  };

  const handleEditClick = (card) => {
    setEditCard({ ...card });
    setData(card);
    setIsEditMode(true);
    setIsDetailCardShow(true);
  };

  const handleSaveClick = () => {
    if (editCard) {
      const updatedData = newCardData.map((card) =>
        card.id === editCard.id ? { ...editCard } : card
      );
      setNewCardData(updatedData);
      setData(editCard);
      setEditCard(null);
      setIsEditMode(false);
      setIsDetailCardShow(false); // Close the detail card after saving
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditCard((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    setIsDetailCardShow(false);
    setIsEditMode(false);
    setEditCard(null);
  };

  const handleDeleteClick = (cardId) => {
    const updatedData = newCardData.filter((card) => card.id !== cardId);
    setNewCardData(updatedData);
    setIsDetailCardShow(false);
    setIsEditMode(false);
    setEditCard(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Header handleAddCard={handleAddCard} />
      {newCardData.map((card) => (
        <Card key={card.id} sx={{ minWidth: 350, border: '4px solid', borderColor: '#66b3ff' }}>
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
            <Button size="small" onClick={() => handleCardClick(card)}>View</Button>
            <Button size="small" onClick={() => handleEditClick(card)}>Edit</Button>
            <IconButton size="small" onClick={() => handleDeleteClick(card.id)}>
              <DeleteIcon color="error" />
            </IconButton>
          </CardActions>
        </Card>
      ))}

      {isDetailCardShow && data && (
        <Paper
          variant="outlined"
          sx={{
            position: 'absolute',
            right: 0,
            top: '30px',
            height: '530px',
            width: '1000px',
            padding: '16px',
            margin: '5% 5% 5% 5%',
            border: '3px solid',
            borderColor: '#66b3ff',
            backgroundColor: '#fff',
          }}
        >
          <div>
            <IconButton onClick={handleClose}>
              <CloseIcon
                sx={{
                  fontSize: 20,
                  backgroundColor: '#ff3333',
                  color: 'white',
                  padding: '0.2px',
                  position: 'absolute',
                  display: 'block',
                }}
              />
            </IconButton>
          </div>

          {isEditMode ? (
            <div>
              <TextField
                name="title"
                label="Title"
                value={editCard.title}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="createdDate"
                label="Date Created"
                value={editCard.createdDate}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="details"
                label="Details"
                value={editCard.details}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline
                rows={4}
              />
              <Button variant="contained" onClick={handleSaveClick} sx={{ marginTop: '16px' }}>Save</Button>
            </div>
          ) : (
            <div>
              <Typography variant="h1" component="h5" sx={{ fontSize: 30, marginTop: '20px', marginLeft: '30px' }}>
                {data.title}
              </Typography>
              <Typography variant="body1" sx={{ marginLeft: '30px' }}>
                <strong>Date Created:</strong> {data.createdDate}
              </Typography>
              <Typography variant="body1" sx={{ marginLeft: '30px' }}>
                <strong>Details:</strong> {data.details}
              </Typography>
            </div>
          )}
        </Paper>
      )}
    </div>
  );
}
