import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { cardsData as initialData } from "../../data/data"; // Renamed to avoid conflict
import { Grid, Card, CardImage, CardContent, CardTitle, CardInfo, CardActions, Button } from "./user.styles";

const UserCards = () => {
  const [cards, setCards] = useState(initialData); // Store cards in state
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/register"); // ✅ Navigates to register.jsx
  };

  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id)); // ✅ Removes the card
  };

  return (
    <Grid>
      {cards.length === 0 ? (
        <p>No cards available</p> // Display message if all cards are deleted
      ) : (
        cards.map((card) => (
          <Card key={card.id}>
            <CardImage src={card.image || "/placeholder.svg"} alt={card.title} />
            <CardContent>
              <CardTitle>{card.title}</CardTitle>
              <CardInfo>Start: {card.startTime}</CardInfo>
              <CardInfo>End: {card.endTime}</CardInfo>
              <CardInfo>Registrations: {card.registrations}</CardInfo>
            </CardContent>
            <CardActions>
              <Button onClick={handleEdit} color="#4CAF50">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
              <Button onClick={() => handleDelete(card.id)} color="#F44336">
                <FontAwesomeIcon icon={faTrash} /> Delete
              </Button>
            </CardActions>
          </Card>
        ))
      )}
    </Grid>
  );
};

export default UserCards;
