import React from "react";
import { Container, Title, Message, Button } from "./NoWorkshopAvailableStyles";

const NoWorkshopAvailable = () => {
    return (
      <Container>
        <Title>No Workshops Available</Title>
        <Message>
        
            There are no workshops available at the moment. Please check back later.
        </Message>
        <Button>Go Back</Button>
      </Container>
    );
  };
  
  export default NoWorkshopAvailable;