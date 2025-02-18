import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { cardsData as initialData } from '../../data/data';
import {
  Grid,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardInfo,
  CardActions,
  Button
} from './user.styles';

const UserCards = () => {
  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem('cards');
    return savedCards ? JSON.parse(savedCards) : initialData;
  });
  
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate('/register');
  };

  const handleDelete = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
    localStorage.setItem('cards', JSON.stringify(updatedCards));
  };

  return (
    <Grid>
      {cards.length === 0 ? (
        <p>No workshops available</p>
      ) : (
        cards.map((card) => (
          <Card key={card.id}>
            <CardImage src={card.image || '/placeholder.svg'} alt={card.title} />
            <CardContent>
              <CardTitle>{card.title}</CardTitle>
              <CardInfo>Start: {new Date(card.startTime).toLocaleString()}</CardInfo>
              <CardInfo>End: {new Date(card.endTime).toLocaleString()}</CardInfo>
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