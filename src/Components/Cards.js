import React, { useState, useEffect } from "react";
import axios from "axios";
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
axios.defaults.withCredentials = true;
 

export default function NoteCard() {
  const [data, setData] = useState(null);
  const [isDetailCardShow, setIsDetailCardShow] = useState(false);
  const [newCardData, setNewCardData] = useState([]);
  const [editCard, setEditCard] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);
  const baseURL = "http://localhost:7000/api";

  useEffect(() => {  // Fetch notes when the component mounts
    axios.get(`${baseURL}/get-notes`)
      .then((response) => {
        setNewCardData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the notes!", error);
      });
  }, []);

  const handleAddCard = () => {
    const newCard = {
      title: "",
      details: "",
      createdDate: new Date().toLocaleDateString(),
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

  const handleSaveClick = async () => {
    console.log("editCard before save:", editCard);
    try {
        if (editCard && editCard.title && editCard.details) { 
            if (editCard._id) {
                // Update existing note
                const updatedCard = {
                    title: editCard.title,
                    details: editCard.details,
                    createdDate: editCard.createdDate,
                };
                const response = await axios.put(`${baseURL}/update-notes/${editCard._id}`, updatedCard);
                console.log("Note updated:", response.data);

                // Update the frontend state with the updated note
                const updatedData = newCardData.map((card) => 
                    card._id === editCard._id ? { ...card, ...updatedCard } : card
                );
                setNewCardData(updatedData);
            } else {
                // Create a new note if there's no _id
                const newCard = {
                    title: editCard.title,
                    details: editCard.details,
                    createdDate: new Date().toLocaleDateString(),
                };
                const response = await axios.post(`${baseURL}/create-notes`, newCard);
                console.log("Note created:", response.data);

                if (response.data && response.data._id) {
                    console.log("Adding new card:", response.data);
                    setNewCardData([...newCardData, response.data]);
                } else {
                    console.error("Invalid response data for created note:", response.data);
                }
            }
        } else {
            console.error("No existing note selected for update or no valid data to save.");
        }
        // Reset the editCard state after saving
        setEditCard(null);
        setIsEditMode(false);
    } catch (error) {
        console.error("There was an error saving the note!", error);
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
    console.log("Card to delete:", cardId);
};

const deleteNote = async () => {
  console.log("Current cardToDelete value in deleteNote:", cardToDelete);
  if (cardToDelete) {
      try {
          const response = await axios.delete(`${baseURL}/delete-notes/${cardToDelete}`);
          console.log("Delete response:", response);

          // Update the frontend state to reflect the deletion
          const updatedData = newCardData.filter(
              (card) => card._id !== cardToDelete
          );
          setNewCardData(updatedData);
          setIsDetailCardShow(false);
          setIsEditMode(false);
          setEditCard(null);
          setOpen(false);
          setCardToDelete(null); // Clear the stored cardId
      } catch (error) {
          console.error("There was an error deleting the note!", error);
      }
  } else {
      console.error("No card ID found for deletion");
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
        card.title && card.details ? (
        <Card
        key={card._id}
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
            <IconButton size="small" onClick={() => handleDeleteClick(card._id)}>
              <DeleteIcon color="error" />
            </IconButton>
          </CardActions>
        </Card>
      ) : null
      ))}

      {isDetailCardShow && data && (
        <Paper
          variant="outlined"
          sx={{
            position: "absolute",
            right: 7,
            top: "30px",
            height: "530px",
            width: "1000px",
            padding: "16px",
            margin: "5px 5px 5px 5px",
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
    <Button onClick={() => {
        console.log("Deleting note with ID:", cardToDelete); 
        deleteNote();}} autoFocus>
        Delete
    </Button>
</DialogActions>

      </Dialog>
    </div>
  );
}
