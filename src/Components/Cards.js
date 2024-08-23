import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "./Header";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function NoteCard() {
  const [data, setData] = useState(null);
  const [isDetailCardShow, setIsDetailCardShow] = useState(false);
  const [newCardData, setNewCardData] = useState([]);
  const [editCard, setEditCard] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);

  const handleAddCard = () => {
    const newCard = {
      id: Date.now(),
      title: "",
      createdDate: new Date().toLocaleDateString(),
      details: "",
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
      const updatedCard = {
        ...editCard,
        createdDate: new Date().toLocaleDateString(),
      };

      const updatedData = newCardData.map((card) =>
        card.id === editCard.id ? updatedCard : card
      );
      setNewCardData(updatedData);
      setData(updatedCard);
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
    setCardToDelete(cardId); // Store the card ID to delete
    setOpen(true); // Open the dialog
  };

  const deleteNote = () => {
    if (cardToDelete !== null) {
      const updatedData = newCardData.filter((card) => card.id !== cardToDelete);
      setNewCardData(updatedData);
      setIsDetailCardShow(false);
      setIsEditMode(false);
      setEditCard(null);
      setOpen(false); // Close the dialog after deletion
      setCardToDelete(null); // Clear the stored cardId
    }
  };

  const handleDialogClose = () => {
    setOpen(false); // Close the dialog without deleting
    setCardToDelete(null); // Clear the stored cardId
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "20px",
      }}
    >
      <Header handleAddCard={handleAddCard} />
      {newCardData.map((card) => (
        <Card
          key={card.id}
          sx={{ minWidth: 350, border: "4px solid", borderColor: "#66b3ff" }}
        >
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
            <Button size="small" onClick={() => handleCardClick(card)}>
              View
            </Button>
            <Button size="small" onClick={() => handleEditClick(card)}>
              Edit
            </Button>
            <IconButton
              size="small"
              onClick={() => handleDeleteClick(card.id)}
            >
              <DeleteIcon color="error" />
            </IconButton>
          </CardActions>
        </Card>
      ))}

      {isDetailCardShow && data && (
        <Paper
          variant="outlined"
          sx={{
            position: "absolute",
            right: 0,
            top: "30px",
            height: "530px",
            width: "1000px",
            padding: "16px",
            margin: "5% 5% 5% 5%",
            border: "3px solid",
            borderColor: "#66b3ff",
            backgroundColor: "#fff",
          }}
        >
          <div>
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: "10px",
                top: "0.2px",
              }}
            >
              <CloseIcon
                sx={{
                  display: "block",
                  fontSize: 20,
                  backgroundColor: "#ff3333",
                  color: "white",
                  padding: "1px",
                }}
              />
            </IconButton>
          </div>

          {isEditMode ? (
            <div>
              <TextField
                name="title"
                label="Title"
                placeholder="Title"
                value={editCard.title}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx={{ marginTop: "50px" }}
              />

              <TextField
                name="details"
                label="Details"
                 placeholder="Type your notes here"
                value={editCard.details}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline
                rows={4}
                sx={{ marginTop: "16px" }}
              />
              <Button
                variant="contained"
                onClick={handleSaveClick}
                sx={{ marginTop: "20px" }}
              >
                Save
              </Button>
            </div>
          ) : (
            <div>
              <Typography
                variant="h1"
                component="h5"
                sx={{ fontSize: 30, marginTop: "20px", marginLeft: "30px" }}
              >
                {data.title}
              </Typography>
              <Typography variant="body1" sx={{ marginLeft: "30px" }}>
                <strong>Date Created:</strong> {data.createdDate}
              </Typography>
              <Typography variant="body1" sx={{ marginLeft: "30px" }}>
                <strong>Details:</strong> {data.details}
              </Typography>
            </div>
          )}
        </Paper>
      )}

      {/* Confirmation Dialog */}
      <Dialog
        open={open}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Note?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this note?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={deleteNote} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
